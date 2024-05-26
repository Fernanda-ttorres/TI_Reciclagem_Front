import { Typography, styled } from "@mui/material";

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
  background: linear-gradient(90deg, #1E4D1B 0%, #000 100%);
  color: #fff;
`;

export { TypographyStyled, MinBoxStyled };
