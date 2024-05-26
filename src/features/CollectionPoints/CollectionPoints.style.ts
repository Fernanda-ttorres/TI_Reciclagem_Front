import { Box, Button, Typography, styled } from '@mui/material';

const BoxStyled = styled(Box)`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #959B79;
    border-radius: 20px;
    padding: 24px;
    gap: 36px

`;

const ButtonStyled = styled(Button)`
    display: flex;
    flex-direction: column;
    color: #1A4717;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 32px;
`;

const TypographyStyled = styled(Typography)`
    color: #034317;
    font-size: 24px;
    font-weight: 700;
    margin-top: 8px;

`;

export { BoxStyled, TypographyStyled, ButtonStyled };