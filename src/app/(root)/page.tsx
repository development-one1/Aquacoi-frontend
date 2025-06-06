// components/RoutesPage.tsx
import Link from 'next/link';
import React from 'react';

interface Route {
  path: string;
  name: string;
}

export default function RoutesPage() {
  const routes: Route[] = [
    { path: '/nosotros', name: 'Nosotros' },
    { path: '/productos', name: 'Productos' },
    { path: '/osmosis', name: 'Sistemas de Ósmosis' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mapa de Rutas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            passHref
            legacyBehavior
          >
            <a className="p-4 border rounded-lg hover:bg-gray-50 transition-colors block">
              <h2 className="text-xl font-semibold">{route.name}</h2>
              <p className="text-gray-600 mt-1">{route.path}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}