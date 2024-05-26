import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { BoxStyled } from "../../CollectionPoints.style";
import BasicSelect from "../../../../shared/components/Select/Select";
import { Button } from "../../../../shared/components/Button/Button";
import { Box } from "@mui/material";
import ButtonAppBar from "../../../../shared/components/AppBar/AppBar";

interface SearchFormProps {
  imageSrc: string;
}
export const SearchForm = ({ imageSrc }: SearchFormProps) => {
  return (
    <Box>
      <ButtonAppBar />
      <BoxStyled>
      <KeyboardBackspaceOutlinedIcon sx={{alignSelf:"start", color:"#fff"}} />
        <img src={imageSrc} />
        <BasicSelect label={"Região"} items={[]} value={""} />
        <Button title={"Filtrar"} isLoading={false} />
      </BoxStyled>
    </Box>
  );
};
