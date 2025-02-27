'use client'; // Marca o componente como Client Component
import React from 'react';
import { useActivities } from '../../hooks/useActivities';
import ActivityDetail from '../../components/ActivityDetail';

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { activityList } = useActivities();
  const activity = activityList.find(a => a.id === Number(id));

  if (!activity) return <p className="text-center text-red-600 font-semibold text-lg">Atividade não encontrada</p>;

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <ActivityDetail activity={activity} />
      </div>
    </div>
  );
}
