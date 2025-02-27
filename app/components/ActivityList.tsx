import React from 'react';

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

interface ActivityListProps {
  activities: Activity[];
  onDelete: (id: number) => void;
}

export default function ActivityList({ activities, onDelete }: ActivityListProps) {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex flex-col min-w-[300px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold text-blue-600">{activity.name}</h2>
          <p className="text-gray-600"><strong>Responsável:</strong> {activity.responsible}</p>
          <p className="text-gray-600"><strong>Data:</strong> {activity.date}</p>
          
          <button
            onClick={() => onDelete(activity.id)}
            className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}
