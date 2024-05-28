import { Box, IconButton, Typography } from "@mui/material";
import ButtonAppBar from "../../../../shared/components/AppBar/AppBar";
import { BoxStyled } from "../../CollectionPoints.style";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { CardStyled } from "./CardMap.style";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

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
            <IconButton sx={{ alignSelf: "end" }} onClick={() => {}}>
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
