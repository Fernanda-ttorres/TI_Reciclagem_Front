import { useState } from "react";
import { Input } from "../../shared/components/Input/Input";
import { BoxStyled, TypographyStyled } from "./Login.style";
import Logo from "../../assets/logo1.png";
import { Box, Link } from "@mui/material";
import { Button } from "../../shared/components/Button/Button";
import useLogin from "./Hooks/useLoginService";

export const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BoxStyled>
        <img src={Logo} alt="Logo" />
        <TypographyStyled>SELETINHA</TypographyStyled>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" isLoading={isLoading} onClick={handleLogin} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link href="forgotPassword" color="#1A4717">
          Recuperar senha
        </Link>
      </BoxStyled>
    </Box>
  );
};
