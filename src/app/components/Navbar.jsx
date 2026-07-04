import Link from "next/link"


function Navbar() {
  return (
    <div>
      <Link href={'/about'}>About</Link>
      <Link href={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navbar
