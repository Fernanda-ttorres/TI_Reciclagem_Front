import { Box, Container } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { Button } from "../../shared/components/Button/Button";
import BasicSelect from "../../shared/components/Select/Select";
import { useState } from "react";
import { BoxStyled, TypographyStyled } from "./AddStudent.style";
import { Input } from "../../shared/components/Input/Input";
import useAddStudentService from "./hooks/useAddStudentService";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

export const AddStudents = () => {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [serie, setSerie] = useState("");
  const [team, setTeam] = useState("");
  const { addStudent, isLoading, success } = useAddStudentService();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNameChange = (event: any) => setName(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegistrationChange = (event: any) =>
    setRegistration(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSerieChange = (event: any) => setSerie(event.target.value);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTeamChange = (event: any) => setTeam(event.target.value);

  const handleSubmit = () => {
    addStudent(name, serie, team, registration);
  };

  const handleCancel = () => {
    setName("");
    setSerie("");
    setRegistration("");
    setTeam("");
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
        {success ? (
          <Box sx={{ display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",}}>
            <TaskAltOutlinedIcon sx={{ fontSize: 100, color: "#1A4717" }} />
            <TypographyStyled>Salvo com Sucesso!</TypographyStyled>
          </Box>
        ) : (
          <>
            <TypographyStyled>Cadastro Aluno</TypographyStyled>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "36px",
              }}
            >
              <Input
                label={"Nome do Aluno"}
                type={"text"}
                value={name}
                onChange={handleNameChange}
              />
              <Input
                label={"Matrícula"}
                type={"text"}
                value={registration}
                onChange={handleRegistrationChange}
              />
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
              <Container sx={{ display: "flex", gap: "32px" }}>
                <Button
                  title={"Cancelar"}
                  isLoading={false}
                  onClick={handleCancel}
                />
                <Button
                  title={"Salvar"}
                  isLoading={isLoading}
                  onClick={handleSubmit}
                />
              </Container>
            </Box>
          </>
        )}
      </BoxStyled>
    </Box>
  );
};
