import { MenuItem, Toolbar, styled } from '@mui/material';

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1A4717;
`;

const MenuItemStyled = styled(MenuItem)`
    width: 265px;
    align-items: center;
    color: #fff;
    background-color: #1A4717;
    font-family: Inter;
    font-size: 20px;
    letter-spacing: 2px;

    :hover {
        background-color: #1A4717;
        opacity: 80%;
    }
`;

export { ToolbarStyled, MenuItemStyled };