import { useState } from "react";
import axios from "axios";
import { apiConfig } from "../../../config/apiConfig";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  token: string;
}

interface useLoginService {
  login: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  data: LoginResponse | null;
}

const useLogin = (): useLoginService => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const navigate = useNavigate();

  const handleCollectionPoints = () => {
    navigate("/points")
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${apiConfig.url}/api/auth/login`,
        null,
        {
          params: {
            email,
            password
          },
        }
      );
      setData(response.data.token);
      handleCollectionPoints();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Algo deu errado");
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, data };
};

export default useLogin;
