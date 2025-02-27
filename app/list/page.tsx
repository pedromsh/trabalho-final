'use client';
import React from 'react';
import { useActivities } from '../hooks/useActivities';
import Link from 'next/link';

export default function List() {
  const { activityList, deleteActivity } = useActivities();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Lista de Atividades</h1>
      {activityList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Não há atividades registradas.</p>
      ) : (
        <div className="flex flex-wrap justify-start gap-6 min-w-[320px]">
          {activityList.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col min-w-[300px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold text-blue-600">{activity.name}</h2>
              <p className="text-gray-600"><strong>Responsável:</strong> {activity.responsible}</p>
              <p className="text-gray-600"><strong>Data:</strong> {activity.date}</p>

              {/* Botão de Excluir */}
              <button
                onClick={() => deleteActivity(activity.id)}
                className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Excluir
              </button>

              {/* Botão de Editar abaixo do Excluir */}
              <Link
                href={`/activities/${activity.id}`}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors mt-4 text-center"
              >
                Editar
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
