import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/home" className="hover:underline">Go to /home</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </header>
  );
};

export default Header;
