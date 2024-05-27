import { useState } from 'react';
import axios from 'axios';

const useAddActivitiesService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addActivity = async (serie: string, team: string, name: string, type: string) => {
    setIsLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/atividades`, null, {
        params: {
          serie,
          team,
          name,
          type,
        },
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error saving activity:', error);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { addActivity, isLoading, success };
};

export default useAddActivitiesService;
