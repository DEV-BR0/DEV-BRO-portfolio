import Navbar from "./components/Navbar";
function page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // Lokal video tez yuklanishi uchun auto qo'yamiz
        poster="/video-poster.jpg" // Video yuklanguncha ko'rinadigan rasm (ixtiyoriy)
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
      </video>

      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/40">
        <Navbar />
        <h1 className="text-white text-4xl font-bold">Saytga xush kelibsiz!</h1>
      </div>
    </div>
  );
}

export default page;
