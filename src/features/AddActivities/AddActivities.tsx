import { Box, Container, SelectChangeEvent } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { BoxStyled, TypographyStyled } from "./AddActivities.style";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Button } from "../../shared/components/Button/Button";
import BasicSelect from "../../shared/components/Select/Select";
import { useState } from "react";
import { Input } from "../../shared/components/Input/Input";

export const AddActivities = () => {
  const [item, setItem] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <Box  sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <ButtonAppBar />
      <BoxStyled>
        <TypographyStyled>Cadastro de Atividades</TypographyStyled>
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"36px" }}>
          <BasicSelect label={"Serie"} items={['1','2','3','4','5']} value={""} onChange={handleChange}/>
          <BasicSelect label={"Turma"} items={["A", "B", "C", "D", "E", "F"]} value={""} onChange={handleChange}/>
          <Input label={"Aluno"} type={"text"}/>
          <BasicSelect label={"Tipo de Atividades"} items={["Sustentabilidade", "Reciclagem"]} value={""} onChange={handleChange}/>
          <Container sx={{ display:"flex", gap:"32px"}}>
            <Button title={"Cancelar"} isLoading={false} />
            <Button title={"Salvar"} isLoading={false} />
          </Container>
        </Box>
        {/* <Box>
          <TaskAltOutlinedIcon sx={{ fontSize: 100, color: "#1A4717" }}/>
          <TypographyStyled>Salvo com Sucesso!</TypographyStyled>
        </Box> */}
      </BoxStyled>
    </Box>
  );
};
