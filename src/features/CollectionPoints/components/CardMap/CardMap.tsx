import { Box, IconButton, Typography } from "@mui/material";
import ButtonAppBar from "../../../../shared/components/AppBar/AppBar";
import { BoxStyled } from "../../CollectionPoints.style";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { CardStyled } from "./CardMap.style";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

interface CardMapProps {
  imageSrc: string;
  neighborhood: string;
  address: string;
  residue: string;
}

export const CardMap = ({
  imageSrc,
  neighborhood,
  address,
  residue,
}: CardMapProps) => {
  return (
    <Box>
      <ButtonAppBar />
      <BoxStyled>
        <KeyboardBackspaceOutlinedIcon
          sx={{ alignSelf: "start", color: "#fff" }}
        />
        <img src={imageSrc} />
        <CardStyled>
          <IconButton sx={{ alignSelf: "end" }} onClick={() => {}}>
            <PinDropOutlinedIcon />
          </IconButton>
          <Typography>
            <strong>Bairro: </strong>
            {neighborhood}
          </Typography>
          <Typography>
            <strong>Endereço: </strong>
            {address}
          </Typography>
          <Typography>
            <strong>Tipos de resíduos: </strong>
            {residue}
          </Typography>
        </CardStyled>
      </BoxStyled>
    </Box>
  );
};
