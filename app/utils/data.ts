// app/(utils)/data.ts
export interface Activity {
    id: number;
    name: string;
    responsible: string;
    date: string;
    description: string;
  }
  
  export let activities: Activity[] = [];
  
  export const addActivity = (activity: Activity) => {
    activities.push(activity);
  };
  
  export const updateActivity = (id: number, updatedActivity: Partial<Activity>) => {
    activities = activities.map(activity =>
      activity.id === id ? { ...activity, ...updatedActivity } : activity
    );
  };
  
  export const deleteActivity = (id: number) => {
    activities = activities.filter(activity => activity.id !== id);
  };