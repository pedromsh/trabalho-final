import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
      <div className="text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 transition-transform transform hover:scale-110">
          Bem-vindo ao Sistema de Atividades da UFC Sobral
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto">
          Gerencie suas atividades de forma simples e eficiente. Organize sua rotina acadêmica e nunca perca prazos novamente.
        </p>
        <Link href="/register">
          <button
            className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            Comece agora
          </button>
        </Link>
      </div>
    </div>
  );
}
