import { InputStyled } from './Input.style'

interface InputProps {
    label: string;
    type: string;
    helperText?: string;
    isError?: boolean;
}

export const Input = ({ label, type, helperText, isError }: InputProps) => {
    return (
        <InputStyled
            error={isError}
            type={type}
            label={label}
            helperText={helperText}
        />
    );
}
