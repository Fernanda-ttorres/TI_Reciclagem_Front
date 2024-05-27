import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { useState } from "react";
import { ToolbarStyled, MenuItemStyled } from "./AppBar.style";
import LogoutIcon from "@mui/icons-material/Logout";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCollectionPoints = () => {
    navigate("/points")
  }
  const handleActivities = () => {
    navigate("/activities")
  }
  const handleStudents = () => {
    navigate("/students")
  }
  const handleDashboard = () => {
    navigate("/dashboard")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <ToolbarStyled>
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItemStyled onClick={handleCollectionPoints} sx={{ gap: 2 }}>
              <RecyclingOutlinedIcon /> Seletinha
            </MenuItemStyled>
            <MenuItemStyled onClick={handleDashboard} sx={{ gap: 2 }}>
              <SpeedOutlinedIcon /> Dashboard
            </MenuItemStyled>
            <MenuItemStyled onClick={handleStudents} sx={{ gap: 2 }}>
              <GroupAddOutlinedIcon /> Cadastro Aluno
            </MenuItemStyled>
            <MenuItemStyled onClick={handleActivities} sx={{ gap: 2 }}>
              <LibraryBooksOutlinedIcon /> Cadastro Atividades
            </MenuItemStyled>
          </Menu>
          <IconButton color="inherit">
            <LogoutIcon color="inherit" />
          </IconButton>
        </ToolbarStyled>
      </AppBar>
    </Box>
  );
}
