import { useState } from "react";
import {Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {tokens} from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelinetOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const SidebarMenu:React.FC=()=> {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
const [isCollapsed,setIsCollapsed] = useState(false);
const [selected, setSelected]= useState("Dashboard");

    return (
    <Box sx={{
      "& .ps-sidebar-root": {
        border: "0px !important",
      },
      "& .ps-sidebar-container": {
        background:`${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor:"transparent !important"
      },
      "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover" : {
        color : "#868dfb !important"
      },
      "& .pro-inner-item:active" : {
        color : "#6870fa !important"
      }
    }}
    >
      <Sidebar defaultCollapsed={isCollapsed}>
        <Menu>
          {/*Logo and menu icon*/}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

            {/*D USER */}
        {!isCollapsed && (
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../assets/img/avatar.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                    >
                        No real
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        VP Fancy Admin
                    </Typography>
                </Box>
            </Box>
        )}

        {/* MENU  ITEMS*/}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box>



        </Menu>
      </Sidebar>

    </Box>
  );
}

export default SidebarMenu;