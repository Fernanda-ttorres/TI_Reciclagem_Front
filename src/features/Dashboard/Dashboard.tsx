import { Box, Typography } from "@mui/material";
import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import { BoxStyled, MinBoxStyled, TypographyStyled } from "./Dashboard.style";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";

export const Dashboard = () => {
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
        <TypographyStyled>Dashboard</TypographyStyled>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "390px",
            gap: "24px",
          }}
        >
          <MinBoxStyled>
            <InsertChartOutlinedRoundedIcon
              sx={{ fontSize: 30, marginRight: 2 }}
            />
            <Box>
              <Typography variant="body2">{"label"}</Typography>
              <Typography fontWeight="bold">{"value"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <InsertChartOutlinedRoundedIcon
              sx={{ fontSize: 30, marginRight: 2 }}
            />
            <Box>
              <Typography variant="body2">{"label"}</Typography>
              <Typography fontWeight="bold">{"value"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <InsertChartOutlinedRoundedIcon
              sx={{ fontSize: 30, marginRight: 2 }}
            />
            <Box>
              <Typography variant="body2">{"label"}</Typography>
              <Typography fontWeight="bold">{"value"}</Typography>
            </Box>
          </MinBoxStyled>
          <MinBoxStyled>
            <InsertChartOutlinedRoundedIcon
              sx={{ fontSize: 30, marginRight: 2 }}
            />
            <Box>
              <Typography variant="body2">{"label"}</Typography>
              <Typography fontWeight="bold">{"value"}</Typography>
            </Box>
          </MinBoxStyled>
        </Box>
      </BoxStyled>
    </Box>
  );
};
