import { useState } from "react";
import axios from "axios";
import { apiConfig } from "../../../config/apiConfig";
import {DataItem } from  '../components/CardMap/CardMap'

const useCollectionPointsService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData ] = useState<DataItem[]>();

  const collectionPointsData: DataItem[] = [
    { address: "Rua A, 123", neighborhood: "Centro", region: "Centro"},
    { address: "Rua B, 456", neighborhood: "Bela Vista", region: "Norte"},
    { address: "Rua C, 789", neighborhood: "Jardins", region: "Leste"},
  ];

  
  const filterRegion = async (
    region: string,
  ) => {
    setIsLoading(true);
    try {
      const filteredData = collectionPointsData.filter(point => point.region === region);
      // await axios.post(`${apiConfig.url}/api/ativosDesc`, {
      //   params: {
      //     region
      //   },
      // });
      setData(filteredData)
      setSuccess(true);
    } catch (error) {
      console.error("Error saving student:", error);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { filterRegion, isLoading, success, data };
};

export default useCollectionPointsService;
