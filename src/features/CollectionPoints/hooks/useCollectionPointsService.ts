import { useState } from "react";
import axios from "axios";
import { apiConfig } from "../../../config/apiConfig";

const useCollectionPointsService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const filterRegion = async (
    region: string,
  ) => {
    setIsLoading(true);
    try {
      await axios.post(`${apiConfig.url}/api/ativosDesc`, {
        params: {
          region
        },
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error saving student:", error);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { filterRegion, isLoading, success };
};

export default useCollectionPointsService;
