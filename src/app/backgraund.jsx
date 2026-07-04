"use client";

import { useEffect, useRef } from "react";

export default function ContourBackground({
  lineColor = "rgba(255,255,255,0.55)",
  background = "#000000",
  levels = 10,
  cellSize = 14,
  speed = 0.055,
  noiseScale = 0.006,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // ---- seeded PRNG (mulberry32) ----
    function mulberry32(seed) {
      return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    // ---- Perlin 3D noise (permutation shuffled with seeded RNG) ----
    const rand = mulberry32(1337);
    const perm = new Uint8Array(512);
    const base = new Uint8Array(256);
    for (let i = 0; i < 256; i++) base[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = base[i];
      base[i] = base[j];
      base[j] = tmp;
    }
    for (let i = 0; i < 512; i++) perm[i] = base[i & 255];

    function fade(t) {
      return t * t * t * (t * (t * 6 - 15) + 10);
    }
    function lerp(a, b, t) {
      return a + t * (b - a);
    }
    function grad(hash, x, y, z) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return (h & 1 ? -u : u) + (h & 2 ? -v : v);
    }
    function noise3(x, y, z) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x);
      const v = fade(y);
      const w = fade(z);
      const A = perm[X] + Y,
        AA = perm[A] + Z,
        AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y,
        BA = perm[B] + Z,
        BB = perm[B + 1] + Z;
      return lerp(
        lerp(
          lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
          lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u),
          v
        ),
        lerp(
          lerp(
            grad(perm[AA + 1], x, y, z - 1),
            grad(perm[BA + 1], x - 1, y, z - 1),
            u
          ),
          lerp(
            grad(perm[AB + 1], x, y - 1, z - 1),
            grad(perm[BB + 1], x - 1, y - 1, z - 1),
            u
          ),
          v
        ),
        w
      );
    }

    let field = null;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / cellSize) + 2;
      rows = Math.ceil(height / cellSize) + 2;
      field = new Float32Array(cols * rows);
    }

    function edgePoint(x1, y1, v1, x2, y2, v2, threshold) {
      const t = (threshold - v1) / (v2 - v1 || 1e-6);
      return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
    }

    function keyOf(p) {
      return p[0].toFixed(3) + "," + p[1].toFixed(3);
    }

    // Har bir threshold uchun barcha kesmalarni yig'ib, keyin
    // ularni bir-biriga ulab (chain) silliq egri chiziq sifatida qaytaradi.
    function collectSegments(threshold) {
      const segs = [];
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const x0 = i * cellSize,
            x1 = (i + 1) * cellSize;
          const y0 = j * cellSize,
            y1 = (j + 1) * cellSize;

          const v00 = field[j * cols + i]; // top-left
          const v10 = field[j * cols + i + 1]; // top-right
          const v01 = field[(j + 1) * cols + i]; // bottom-left
          const v11 = field[(j + 1) * cols + i + 1]; // bottom-right

          let caseIndex = 0;
          if (v00 >= threshold) caseIndex |= 8;
          if (v10 >= threshold) caseIndex |= 4;
          if (v11 >= threshold) caseIndex |= 2;
          if (v01 >= threshold) caseIndex |= 1;
          if (caseIndex === 0 || caseIndex === 15) continue;

          const top = () => edgePoint(x0, y0, v00, x1, y0, v10, threshold);
          const right = () => edgePoint(x1, y0, v10, x1, y1, v11, threshold);
          const bottom = () => edgePoint(x0, y1, v01, x1, y1, v11, threshold);
          const left = () => edgePoint(x0, y0, v00, x0, y1, v01, threshold);

          switch (caseIndex) {
            case 1:
            case 14:
              segs.push([left(), bottom()]);
              break;
            case 2:
            case 13:
              segs.push([bottom(), right()]);
              break;
            case 3:
            case 12:
              segs.push([left(), right()]);
              break;
            case 4:
            case 11:
              segs.push([top(), right()]);
              break;
            case 5:
              segs.push([left(), top()]);
              segs.push([bottom(), right()]);
              break;
            case 6:
            case 9:
              segs.push([top(), bottom()]);
              break;
            case 7:
            case 8:
              segs.push([left(), top()]);
              break;
            case 10:
              segs.push([left(), bottom()]);
              segs.push([top(), right()]);
              break;
            default:
              break;
          }
        }
      }
      return segs;
    }

    // Kesmalarni umumiy nuqtalar orqali zanjirlarga (polyline) ulaydi.
    function buildChains(segs) {
      const adjacency = new Map(); // key -> [{edgeIdx, pointKey, point}]
      const pointsByKey = new Map();

      segs.forEach((seg, idx) => {
        const [p1, p2] = seg;
        const k1 = keyOf(p1);
        const k2 = keyOf(p2);
        pointsByKey.set(k1, p1);
        pointsByKey.set(k2, p2);
        if (!adjacency.has(k1)) adjacency.set(k1, []);
        if (!adjacency.has(k2)) adjacency.set(k2, []);
        adjacency.get(k1).push({ edgeIdx: idx, otherKey: k2 });
        adjacency.get(k2).push({ edgeIdx: idx, otherKey: k1 });
      });

      const visited = new Array(segs.length).fill(false);
      const chains = [];

      function takeUnvisitedNeighbor(key) {
        const neighbors = adjacency.get(key);
        if (!neighbors) return null;
        for (const n of neighbors) {
          if (!visited[n.edgeIdx]) return n;
        }
        return null;
      }

      // Ochiq zanjirlarni (uchlari bitta bog'lanishga ega) avval quramiz.
      for (const [key, neighbors] of adjacency) {
        if (neighbors.filter((n) => !visited[n.edgeIdx]).length !== 1) continue;
        let currentKey = key;
        const chain = [pointsByKey.get(currentKey)];
        let next = takeUnvisitedNeighbor(currentKey);
        while (next) {
          visited[next.edgeIdx] = true;
          currentKey = next.otherKey;
          chain.push(pointsByKey.get(currentKey));
          next = takeUnvisitedNeighbor(currentKey);
        }
        if (chain.length > 1) chains.push(chain);
      }

      // Qolganlari — yopiq halqalar.
      for (let idx = 0; idx < segs.length; idx++) {
        if (visited[idx]) continue;
        const [p1] = segs[idx];
        let currentKey = keyOf(p1);
        const chain = [pointsByKey.get(currentKey)];
        visited[idx] = true;
        let currentOther = keyOf(segs[idx][1]);
        chain.push(pointsByKey.get(currentOther));
        let next = takeUnvisitedNeighbor(currentOther);
        while (next) {
          visited[next.edgeIdx] = true;
          currentOther = next.otherKey;
          chain.push(pointsByKey.get(currentOther));
          next = takeUnvisitedNeighbor(currentOther);
        }
        if (chain.length > 1) chains.push(chain);
      }

      return chains;
    }

    // Zanjirni burchaklarni "kesib" (midpoint) silliqlab chizadi.
    function drawSmoothChain(chain) {
      if (chain.length < 2) return;
      ctx.moveTo(chain[0][0], chain[0][1]);
      if (chain.length === 2) {
        ctx.lineTo(chain[1][0], chain[1][1]);
        return;
      }
      for (let i = 1; i < chain.length - 1; i++) {
        const cur = chain[i];
        const next = chain[i + 1];
        const midX = (cur[0] + next[0]) / 2;
        const midY = (cur[1] + next[1]) / 2;
        ctx.quadraticCurveTo(cur[0], cur[1], midX, midY);
      }
      const last = chain[chain.length - 1];
      ctx.lineTo(last[0], last[1]);
    }

    function marchSquares(threshold) {
      const segs = collectSegments(threshold);
      const chains = buildChains(segs);
      for (const chain of chains) {
        drawSmoothChain(chain);
      }
    }

    let t = 0;

    function draw() {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          field[j * cols + i] =
            noise3(i * noiseScale * cellSize, j * noiseScale * cellSize, t) *
              0.5 +
            0.5;
        }
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1.2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let l = 0; l < levels; l++) {
        const threshold = (l + 0.5) / levels;
        ctx.beginPath();
        marchSquares(threshold);
        ctx.stroke();
      }

      t += speed * 0.01;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [lineColor, background, levels, cellSize, speed, noiseScale]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}