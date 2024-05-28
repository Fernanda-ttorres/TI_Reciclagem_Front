import { Box, IconButton, Typography } from "@mui/material";
import ButtonAppBar from "../../../../shared/components/AppBar/AppBar";
import { BoxStyled } from "../../CollectionPoints.style";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { CardStyled } from "./CardMap.style";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useNavigate } from "react-router-dom";

export interface DataItem {
  address: string;
  neighborhood: string;
  region: string;
}

interface CardMapProps {
  imageSrc: string;
  data?: DataItem[];
}

export const CardMap = ({ imageSrc, data }: CardMapProps) => {
  const navigate = useNavigate();
  const handleMapsNavigate = () => {
    navigate("/maps-api")
  }

  return (
    <Box>
      <ButtonAppBar />
      <BoxStyled>
        <KeyboardBackspaceOutlinedIcon
          sx={{ alignSelf: "start", color: "#fff" }}
        />
        <img src={imageSrc} />
        {data?.map((d, index) => (
          <CardStyled key={index}>
            <IconButton sx={{ alignSelf: "end" }} onClick={handleMapsNavigate}>
              <PinDropOutlinedIcon />
            </IconButton>
            <Typography>
              <strong>Bairro: </strong>
              {d.neighborhood}
            </Typography>
            <Typography>
              <strong>Endereço: </strong>
              {d.address}
            </Typography>
          </CardStyled>
        ))}
      </BoxStyled>
    </Box>
  );
};
