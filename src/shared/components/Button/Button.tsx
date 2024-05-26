import { ButtonStyled } from './Button.style';

interface ButtonProps {
    title: string;
    isLoading: boolean
}
export const Button = ({title, isLoading}: ButtonProps) => {
  return (
    <ButtonStyled loading={isLoading} variant="outlined">
        {title}
    </ButtonStyled>
  )
}

