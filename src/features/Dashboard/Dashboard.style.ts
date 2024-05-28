import { Box, Typography, styled } from "@mui/material";

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #959b79;
  border-radius: 20px;
  padding: 24px;
  gap: 18px;
  height: 300px;
`;

const TypographyStyled = styled(Typography)`
  color: #034317;
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0;
`;

const MinBoxStyled = styled(Typography)`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 32px;
  padding: 8px;
  background: linear-gradient(90deg, #1e4d1b 0%, #000 100%);
  color: #fff;
`;

export { TypographyStyled, MinBoxStyled, BoxStyled };
