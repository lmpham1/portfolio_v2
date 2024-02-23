import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0  z-10">
      <nav className="bg-white bg-opacity-90 py-4 px-4 absolute shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between text-black">
          <Link href="/">
            <span className="text-2xl font-bold">MinhDepChai</span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <span className="hover:text-gray-300">About</span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="hover:text-gray-300">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-gray-300">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}