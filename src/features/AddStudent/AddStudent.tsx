import { Box, Container, SelectChangeEvent } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { Button } from "../../shared/components/Button/Button";
import BasicSelect from "../../shared/components/Select/Select";
import { useState } from "react";
import { BoxStyled, TypographyStyled } from "./AddStudent.style";
import { Input } from "../../shared/components/Input/Input";

export const AddStudents = () => {
  const [item, setItem] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <Box  sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <ButtonAppBar />
      <BoxStyled>
        <TypographyStyled>Cadastro Aluno</TypographyStyled>
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"36px" }}>
          <Input label={"Nome do Aluno"} type={"text"}/>
          <Input label={"Matrícula"} type={"text"}/>
          <BasicSelect label={"Turma"} items={[]} value={""} onChange={handleChange}/>
          <BasicSelect label={"Série"} items={[]} value={""} onChange={handleChange}/>
          <Container sx={{ display:"flex", gap:"32px"}}>
            <Button title={"Cancelar"} isLoading={false} />
            <Button title={"Salvar"} isLoading={false} />
          </Container>
        </Box>
      </BoxStyled>
    </Box>
  );
};
