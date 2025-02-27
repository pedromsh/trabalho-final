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
    setActivityList([...activities]);
  };

  const updateExistingActivity = (id: number, updatedActivity: Partial<Activity>) => {
    updateActivity(id, updatedActivity);
    setActivityList([...activities]);
  };

  const deleteExistingActivity = (id: number) => {
    deleteActivity(id);
    setActivityList([...activities]);
  };

  return {
    activityList,
    addActivity: addNewActivity,
    updateActivity: updateExistingActivity,
    deleteActivity: deleteExistingActivity,
  };
};
