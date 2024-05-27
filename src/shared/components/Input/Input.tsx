import { InputStyled } from './Input.style'

interface InputProps {
    label: string;
    type: string;
    helperText?: string;
    isError?: boolean;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (e: any) => void;
}

export const Input = ({ label, type, helperText, isError, value, onChange }: InputProps) => {
    return (
        <InputStyled
            error={isError}
            type={type}
            label={label}
            helperText={helperText}
            value={value}
            onChange={onChange}
        />
    );
}
