import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
          <Link href="/">Zohaib Javed</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/jobs" className="hover:text-gray-300">Jobs</Link>
          <Link href="/jobs/frontend-developer" className="hover:text-gray-300">Frontend Developer</Link>
          <Link href="/jobs/backend-developer" className="hover:text-gray-300">Backend Developer</Link>
          <Link href="/jobs/ui-ux-designer" className="hover:text-gray-300">UI/UX Designer</Link>
        </div>
      </div>
    </nav>
  );
}
