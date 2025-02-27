// app/(components)/Navbar.tsx
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-white text-xl font-bold">
            <Link href="/">UFC Sobral</Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/register"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/register'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-200 hover:bg-blue-700 hover:text-white'
              } transition-colors`}
            >
              Cadastrar
            </Link>
            <Link
              href="/list"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/list'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-200 hover:bg-blue-700 hover:text-white'
              } transition-colors`}
            >
              Listar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}