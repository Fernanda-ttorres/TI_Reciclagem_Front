import { Box, Typography } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { BoxStyled, MinBoxStyled, TypographyStyled } from "./Dashboard.style";
import { Bar } from "react-chartjs-2";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

export const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["Aluno A", "Aluno B","Aluno C", "Aluno D", "Aluno E", "Aluno F", "Aluno G" ],
    datasets: [
      {
        label: "Notas",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#03431794",
        borderColor: "#034317",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Desempenho",
        color: "#034317",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        
      },
      x: {
        grid: {
          display: false,
        },
      }
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "space-between",
      }}
    >
      <ButtonAppBar />
      <BoxStyled>
        <TypographyStyled>Dashboard</TypographyStyled>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            gap: "24px",
          }}
        >
          <MinBoxStyled>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 30, marginX: 1 }}
            />
            <Box>
              <Typography variant="body2">{"Alunos"}</Typography>
              <Typography fontWeight="bold">{"15"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <HourglassBottomRoundedIcon
              sx={{ fontSize: 30, marginX: 1 }}
            />
            <Box>
              <Typography variant="body2">{"Finalizou"}</Typography>
              <Typography fontWeight="bold">{"82%"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <InsertChartOutlinedRoundedIcon
              sx={{ fontSize: 30, marginX: 1 }}
            />
            <Box>
              <Typography variant="body2">{"Aprov."}</Typography>
              <Typography fontWeight="bold">{"6.2"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <EmojiEventsOutlinedIcon
              sx={{ fontSize: 30, marginX: 1 }}
            />
            <Box>
              <Typography variant="body2">{"Sucesso"}</Typography>
              <Typography fontWeight="bold">{"2"}</Typography>
            </Box>
          </MinBoxStyled>
        </Box>
        <Box sx={{width:"24rem", height:"300px", marginTop:"24px"}}>
          <Bar data={data} options={options} />
        </Box>
      </BoxStyled>
    </Box>
  );
};
