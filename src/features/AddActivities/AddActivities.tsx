import { Box, Container } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { BoxStyled, TypographyStyled } from "./AddActivities.style";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Button } from "../../shared/components/Button/Button";
import BasicSelect from "../../shared/components/Select/Select";
import { useState } from "react";
import { Input } from "../../shared/components/Input/Input";
import useAddActivitiesService from "./hooks/useAddActivitiesService";

export const AddActivities = () => {
  const [team, setTeam] = useState("");
  const [serie, setSerie] = useState("");
  const [student, setStudent] = useState("");
  const [ativity, setAtivity] = useState("");
  const { addActivity, isLoading, success } = useAddActivitiesService();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTeamChange = (event: any) => setTeam(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSerieChange = (event: any) => setSerie(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStudentChange = (event: any) => setStudent(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAtividadeChange = (event: any) => setAtivity(event.target.value);

  const handleSubmit = () => {
    addActivity(team, serie, student, ativity);
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
      <ButtonAppBar />
      <BoxStyled>
        <TypographyStyled>Cadastro de Atividades</TypographyStyled>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <BasicSelect
            label={"Serie"}
            items={["1", "2", "3", "4", "5"]}
            value={serie}
            onChange={handleSerieChange}
          />
          <BasicSelect
            label={"Turma"}
            items={["A", "B", "C", "D", "E", "F"]}
            value={team}
            onChange={handleTeamChange}
          />
          <Input
            label={"Aluno"}
            type={"text"}
            value={student}
            onChange={handleStudentChange}
          />
          <BasicSelect
            label={"Tipo de Atividades"}
            items={["Sustentabilidade", "Reciclagem"]}
            value={ativity}
            onChange={handleAtividadeChange}
          />
          <Container sx={{ display: "flex", gap: "32px" }}>
            <Button title={"Cancelar"} isLoading={false} onClick={() => {}} />
            <Button
              title={"Salvar"}
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </Container>
        </Box>
        {success && (
          <Box>
            <TaskAltOutlinedIcon sx={{ fontSize: 100, color: "#1A4717" }} />
            <TypographyStyled>Salvo com Sucesso!</TypographyStyled>
          </Box>
        )}
      </BoxStyled>
    </Box>
  );
};
