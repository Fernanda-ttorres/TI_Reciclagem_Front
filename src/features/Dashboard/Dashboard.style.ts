import { Box, Typography, styled } from "@mui/material";

const BoxStyled = styled(Box)`
  display: flex;
  width: 360px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #959b79;
  border-radius: 20px;
  padding: 24px;
  gap: 18px;
  margin-top: 32px;
`;

const TypographyStyled = styled(Typography)`
  color: #034317;
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const MinBoxStyled = styled(Typography)`
  width: 140px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 32px;
  padding: 8px;
  background: linear-gradient(200deg, #1e4d1b 20%, #000 100%);
  color: #fff;
`;

export { TypographyStyled, MinBoxStyled, BoxStyled };
