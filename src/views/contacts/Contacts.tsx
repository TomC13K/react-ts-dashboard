import {Box, useTheme} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataContacts} from "../../mockData/mockData";
import Header from "../../components/Header";


interface IMockDataContact {
    id: number,
    name: string,
    email: string,
    age: number,
    phone: string,
    address: string,
    city: string,
    zipCode: string,
    registrarId: number,
}

const Contacts:React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const columns:any[] =[
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Registrar ID"},
        {field: "name", headerName: "Name", flex: 1,cellClassName: "name-column--cell"}, // className used down in the code in custom Box style
        {field: "age", headerName: "Age", type:"number",headerAlign: "center",align: "left"},
        {field: "phone", headerName: "Phone Number",flex:1},
        {field: "email", headerName: "Email",flex:1},
        {field: "address", headerName: "Address",flex:1},
        {field: "city", headerName: "City",flex:1},
        {field: "zipCode", headerName: "Zip Code",flex:1},

    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of contacts for future reference"/>
            {/*style of the box that shows the table*/}
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border:"none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom:"none"
                    },
                    "& .name-column--cell": {
                        color:colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor:colors.blueAccent[700],
                        borderBottom:"none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor:colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop:"none",
                        backgroundColor:colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    columns={columns}
                    rows={mockDataContacts}
                    slots={{toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contacts;

