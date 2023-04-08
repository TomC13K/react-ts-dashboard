import {Box, Typography,useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataTeam} from "../../mockData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {ReactNode} from "react";

interface IMockData {
    id: number,
    name: string,
    email: string,
    age: number,
    phone: string,
    access: string,
}

const Team:React.FC = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);


    const columns:any[] =[
    {field: "id", headerName: "ID"},
    {field: "name", headerName: "Name", flex: 1,cellClassName: "name-column--cell"},
    {field: "age", headerName: "Age", type:"number",headerAlign: "center",align: "left"},
    {field: "phone", headerName: "Phone Number",flex:1},
    {field: "email", headerName: "Email",flex:1},
    {   field: "access",
        headerName: "Access Level",
        flex:1,
        // renderCell: ({ row: { access} }):ReactNode => {
        // return(
        //     <Box
        //         width="60%"
        //         m="0 auto"
        //         p="5px"
        //         display="flex"
        //         justifyContent="center"
        //         bgcolor={
        //             access === "admin"
        //                 ? colors.greenAccent[600]
        //                 : access === "manager"
        //                     ? colors.greenAccent[700]
        //                     : colors.greenAccent[700]
        //         }
        //         borderRadius="4px"
        //     >
        //         {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
        //         {access==="manager" && <SecurityOutlinedIcon/>}
        //         {access==="user" && <LockOpenOutlinedIcon/>}
        //         <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
        //             {access}
        //         </Typography>
        //
        //     </Box>
        // )}
    }
];

return (
    <Box m="20px">
        <Header title="Team" subtitle="Managing Team members"/>
        {/*style of the box that shows the table*/}
        <Box
            m="40px 0 0 0"
            height="75vh"
        >
            <DataGrid columns={columns} rows={mockDataTeam}
            />
        </Box>
    </Box>
)
}

export default Team;

