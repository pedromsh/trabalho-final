// app/(components)/ActivityDetail.tsx
import React from 'react';

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

interface ActivityDetailProps {
  activity: Activity;
}

export default function ActivityDetail({ activity }: ActivityDetailProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">{activity.name}</h1>
      <p className="text-gray-700"><strong>Responsável:</strong> {activity.responsible}</p>
      <p className="text-gray-700"><strong>Data:</strong> {activity.date}</p>
      <p className="text-gray-700"><strong>Descrição:</strong> {activity.description}</p>
    </div>
  );
}