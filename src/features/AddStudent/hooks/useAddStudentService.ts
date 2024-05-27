import { useState } from "react";
import axios from "axios";

const useAddStudentService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addStudent = async (
    name: string,
    registration: string,
    team: string,
    serie: string
  ) => {
    setIsLoading(true);
    try {
      await axios.post(`http://localhost:8080/api/auth/student`, {
        params: {
          name,
          registration,
          serie,
          team,
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

  return { addStudent, isLoading, success };
};

export default useAddStudentService;
