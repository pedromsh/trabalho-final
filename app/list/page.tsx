'use client'; // Marca o componente como Client Component
import React from 'react';
import { useActivities } from '../hooks/useActivities';
import ActivityList from '../components/ActivityList';

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
            <ActivityList
              key={activity.id}
              activities={[activity]} 
              onDelete={deleteActivity} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
