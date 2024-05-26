import { Input } from "../../shared/components/Input/Input";
import { BoxStyled, TypographyStyled } from "./Login.style";
import Logo from '../../assets/logo1.png'
import { Box, Link } from "@mui/material";
import { Button } from "../../shared/components/Button/Button";


export const Login = () => {

  return (
    <Box  sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <BoxStyled>
        <img src={Logo}/>
        <TypographyStyled>SELETINHA</TypographyStyled>
        <Input label="Email" type="email" />
        <Input label="Senha" type="password" />
        <Button title="Entrar" isLoading={false} />
        <Link href="forgotPassword" color="#1A4717">Recuperar senha</Link>
      </BoxStyled>
    </Box>
  );
};
