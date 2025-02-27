'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Usando o hook de navegação do Next.js
import { useActivities } from '../../hooks/useActivities'; // Importando o hook que manipula as atividades

interface Params {
  id: string; // Tipagem correta para o 'id' vindo da URL
}

export default function EditActivity({ params }: { params: Params }) {
  const { id } = params; // Agora podemos acessar o 'id' sem erro de tipo
  const { activityList, updateActivity } = useActivities(); // Pegando as atividades e a função de atualização
  const [activity, setActivity] = useState<any>({
    name: '',
    responsible: '',
    date: '',
    description: ''
  });

  const router = useRouter(); // Hook de navegação do Next.js

  // Carrega a atividade a partir do ID
  useEffect(() => {
    if (id) {
      const foundActivity = activityList.find((activity) => activity.id === Number(id));
      if (foundActivity) {
        setActivity(foundActivity);
      }
    }
  }, [id, activityList]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateActivity(Number(id), activity); // Atualiza a atividade com os dados modificados
    router.push('/activities/list'); // Redireciona para a página de listagem de atividades após a edição
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setActivity((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Editar Atividade</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">Nome da Atividade</label>
          <input
            type="text"
            id="name"
            name="name"
            value={activity.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="responsible" className="block text-lg font-semibold">Responsável</label>
          <input
            type="text"
            id="responsible"
            name="responsible"
            value={activity.responsible}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-lg font-semibold">Data</label>
          <input
            type="date"
            id="date"
            name="date"
            value={activity.date}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-semibold">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={activity.description}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Atualizar Atividade
        </button>
      </form>
    </div>
  );
}