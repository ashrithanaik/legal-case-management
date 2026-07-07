import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FolderIcon from "@mui/icons-material/Folder";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const menu = [
  {
    text: "Admin Dashboard",
    icon: <DashboardIcon />,
    path: "/admin",
  },
  {
    text: "Lawyer Dashboard",
    icon: <WorkIcon />,
    path: "/lawyer",
  },
  {
    text: "Client Dashboard",
    icon: <PersonIcon />,
    path: "/client-dashboard",
  },
  {
    text: "Create Case",
    icon: <AddCircleIcon />,
    path: "/create-case",
  },
  {
    text: "Edit Case",
    icon: <EditIcon />,
    path: "/edit-case",
  },
  {
    text: "View Case",
    icon: <VisibilityIcon />,
    path: "/view-case",
  },
  {
    text: "Search Cases",
    icon: <SearchIcon />,
    path: "/search-case",
  },
  {
    text: "Assign Lawyer",
    icon: <AssignmentIndIcon />,
    path: "/assign-lawyer",
  },
  {
    text: "Client Portal",
    icon: <FolderIcon />,
    path: "/client",
  },
  {
    text: "Documents",
    icon: <FolderIcon />,
    path: "/documents",
  },
  {
    text: "Hearing Schedule",
    icon: <EventIcon />,
    path: "/hearings",
  },
  {
    text: "Notifications",
    icon: <NotificationsIcon />,
    path: "/notifications",
  },
  {
    text: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1565C0",
          color: "#fff",
        },
      }}
    >
      <Toolbar />

      <List>
        {menu.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                "&:hover": {
                  backgroundColor: "#1976D2",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;