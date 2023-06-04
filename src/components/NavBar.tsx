import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-4 z-10 relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-white text-2xl font-bold">Logo</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <span className="text-white hover:text-gray-300">About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="text-white hover:text-gray-300">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-gray-300">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};