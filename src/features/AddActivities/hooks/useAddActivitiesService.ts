import { useState } from 'react';
import axios from 'axios';
import { apiConfig } from '../../../config/apiConfig';
import useLogin from '../../Login/Hooks/useLoginService';

const useAddActivitiesService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { data } = useLogin();

  const addActivity = async (team: string, serie: string, nome: string) => {
    setIsLoading(true);
    try {
      await axios.post(`${apiConfig.url}/api/atividades`, null, {
        params: {
          team,
          serie,
          nome,
        },
        headers: {
          Authorization: `Bearer ${data}`
        }
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error saving activity:', error);
      setSuccess(false);
    } finally {
      setIsLoading(false);
      setSuccess(true);
    }
  };

  return { addActivity, isLoading, success };
};

export default useAddActivitiesService;