import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { BoxStyled } from "../../CollectionPoints.style";
import BasicSelect from "../../../../shared/components/Select/Select";
import { Button } from "../../../../shared/components/Button/Button";
import { Box, IconButton } from "@mui/material";
import ButtonAppBar from "../../../../shared/components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCollectionPointsService from "../../hooks/useCollectionPointsService";
import { CardMap } from "../CardMap/CardMap";

interface SearchFormProps {
  imageSrc: string;
}
export const SearchForm = ({ imageSrc }: SearchFormProps) => {
  const [region, setRegion] = useState("");

  const navigate = useNavigate();
  const { filterRegion, isLoading, success, data } =
    useCollectionPointsService();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegionChange = (event: any) => setRegion(event.target.value);

  const submitSearch = () => {
    filterRegion(region);
  };

  return (
    <Box>
      {success ? (
        <CardMap imageSrc={imageSrc} data={data} />
      ) : (
        <>
          <ButtonAppBar />
          <BoxStyled>
            <IconButton
              onClick={() => navigate(-1)}
              sx={{ alignSelf: "start", color: "#fff" }}
            >
              <KeyboardBackspaceOutlinedIcon />
            </IconButton>
            <img src={imageSrc} />
            <BasicSelect
              label={"Região"}
              items={["Centro", "Leste", "Nordeste", "Norte", "Oeste"]}
              value={region}
              onChange={handleRegionChange}
            />
            <Button
              title={"Filtrar"}
              isLoading={isLoading}
              onClick={submitSearch}
            />
          </BoxStyled>
        </>
      )}
    </Box>
  );
};
