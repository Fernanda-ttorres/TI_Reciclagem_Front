import { Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { MinBoxStyled, TypographyStyled } from "./Dashboard.style";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';

export const Dashboard = () => {
  return (
    <Box sx={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <ButtonAppBar />
      <TypographyStyled>Dashboard</TypographyStyled>
      <Box sx={{ display:"flex", flexWrap: "wrap", width:"390px", gap: "24px"}}>
        <MinBoxStyled>
          <InsertChartOutlinedRoundedIcon sx={{ fontSize: 30, marginRight: 2 }}/>
          <Box>
            <Typography variant="body2">{"label"}</Typography>
            <Typography fontWeight="bold">
              {"value"}
            </Typography>
          </Box>
        </MinBoxStyled>
        <MinBoxStyled>
          <InsertChartOutlinedRoundedIcon sx={{ fontSize: 30, marginRight: 2 }}/>
          <Box>
            <Typography variant="body2">{"label"}</Typography>
            <Typography fontWeight="bold">
              {"value"}
            </Typography>
          </Box>
        </MinBoxStyled>
        <MinBoxStyled>
          <InsertChartOutlinedRoundedIcon sx={{ fontSize: 30, marginRight: 2 }}/>
          <Box>
            <Typography variant="body2">{"label"}</Typography>
            <Typography fontWeight="bold">
              {"value"}
            </Typography>
          </Box>
        </MinBoxStyled>
        <MinBoxStyled>
          <InsertChartOutlinedRoundedIcon sx={{ fontSize: 30, marginRight: 2 }}/>
          <Box>
            <Typography variant="body2">{"label"}</Typography>
            <Typography fontWeight="bold">
              {"value"}
            </Typography>
          </Box>
        </MinBoxStyled>
      </Box>

      <Gauge
        value={75}
        startAngle={-110}
        endAngle={110}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            transform: "translate(0px, 0px)",
          },
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
      <BarChart
        xAxis={[{ scaleType: "band", data: ["A", "B", "C", "D", "E", "F"] }]}
        series={[{ data: [4, 2, 3, 1, 3, 2] }]}
        width={500}
        height={300}
        grid={{ horizontal: true }}
      />

      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
          {
            data: [1, 3, 5, 6, 8.5, 10],
          },
        ]}
        height={300}
        width={500}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
};
