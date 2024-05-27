import { ButtonStyled } from "./Button.style";

interface ButtonProps {
  title: string;
  isLoading: boolean;
  onClick: () => void;
}
export const Button = ({ title, isLoading, onClick }: ButtonProps) => {
  return (
    <ButtonStyled loading={isLoading} variant="outlined" onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};
