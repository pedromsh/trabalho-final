import { useState, useEffect } from 'react';
import { activities, addActivity, updateActivity, deleteActivity } from '../utils/data';

interface Activity {
  id: number;
  name: string;
  responsible: string;
  date: string;
  description: string;
}

export const useActivities = () => {
  const [activityList, setActivityList] = useState<Activity[]>([]);

  useEffect(() => {
    setActivityList(activities); // Carrega atividades ao iniciar
  }, []);

  const addNewActivity = (activity: Activity) => {
    addActivity(activity);
    setActivityList((prevList) => [...prevList, activity]); // Adiciona a nova atividade
  };

  const updateExistingActivity = (id: number, updatedActivity: Partial<Activity>) => {
    updateActivity(id, updatedActivity);
    setActivityList((prevList: Activity[]) =>
      prevList.map((activity) =>
        activity.id === id ? { ...activity, ...updatedActivity } : activity
      )
    ); // Atualiza a atividade no estado local
  };

  const deleteExistingActivity = (id: number) => {
    deleteActivity(id);
    setActivityList((prevList: Activity[]) => prevList.filter((activity) => activity.id !== id)); // Remove a atividade
  };

  return {
    activityList,
    addActivity: addNewActivity,
    updateActivity: updateExistingActivity,
    deleteActivity: deleteExistingActivity,
  };
};
