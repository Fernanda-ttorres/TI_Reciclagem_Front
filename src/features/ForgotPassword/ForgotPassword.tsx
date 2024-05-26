import { Input } from "../../shared/components/Input/Input";
import Logo from '../../assets/logo1.png'
import { Box } from "@mui/material";
import { Button } from "../../shared/components/Button/Button";
import { BoxStyled, TypographyStyled } from "./ForgotPassword.style";

export const ForgotPassword = () => {
  return (
    <Box  sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <BoxStyled>
        <img src={Logo}/>
        <TypographyStyled>SELETINHA</TypographyStyled>
        <Input label="Email" type="email" />
        <Input label="Código do professor" type="text" />
        <Button title="Redefinir senha" isLoading={false} />
      </BoxStyled>
    </Box>
  );
};