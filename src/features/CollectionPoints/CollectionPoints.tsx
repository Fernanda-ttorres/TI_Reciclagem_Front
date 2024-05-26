import ButtonAppBar from "../../shared/components/AppBar/AppBar";
import {
  BoxStyled,
  TypographyStyled,
  ButtonStyled,
} from "./CollectionPoints.style";
import { Box } from "@mui/material";
import Vidro from "../../assets/vidro.png";
import Plastico from "../../assets/platico.png";
import Papel from "../../assets/papel.png";
import Organico from "../../assets/organico.png";
import Metal from "../../assets/metal.png";
import Eletronico from "../../assets/Eletronicos.png";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { useState } from "react";

export const CollectionPoints = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleClick = (image: string) => {
    setSelectedImage(image);
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
      {selectedImage ? (
        <SearchForm imageSrc={selectedImage} />
      ) : (
        <BoxStyled>
          <TypographyStyled>Pontos de Coleta</TypographyStyled>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <ButtonStyled onClick={() => handleClick(Vidro)}>
              <img src={Vidro} alt="Vidro" />
              VIDRO
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClick(Plastico)}>
              <img src={Plastico} alt="Plastico" />
              PLÁSTICO
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClick(Papel)}>
              <img src={Papel} alt="Papel" />
              PAPEL
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClick(Organico)}>
              <img src={Organico} alt="Organico" />
              ORGÂNICO
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClick(Metal)}>
              <img src={Metal} alt="Metal" />
              METAL
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClick(Eletronico)}>
              <img src={Eletronico} alt="Eletronico" />
              ELETRÔNICO
            </ButtonStyled>
          </Box>
        </BoxStyled>
      )}
    </Box>
  );
};
