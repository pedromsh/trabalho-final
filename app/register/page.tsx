'use client'; // Marca o componente como Client Component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useActivities } from '../hooks/useActivities';
import ActivityForm from '../components/ActivityForm';

export default function Register() {
  const router = useRouter();
  const { addActivity } = useActivities();

  const handleSubmit = (activity: {
    id: number;
    name: string;
    responsible: string;
    date: string;
    description: string;
  }) => {
    if (!activity.name || !activity.responsible || !activity.date || !activity.description) {
      alert("Todos os campos são obrigatórios");
      return;
    }
    addActivity(activity);
    router.push('/list');
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-xl">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Cadastrar Atividade</h1>
        <ActivityForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
