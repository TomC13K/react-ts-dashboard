import {Box, Typography, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens, ThemeObject, Colors} from "../../theme";
import {mockDataInvoices} from "../../mockData/mockData";
import Header from "../../components/Header";
import {ReactNode} from "react";

const Invoices:React.FC = () => {
    const theme:ThemeObject = useTheme();
    const colors: Colors = tokens(theme.palette.mode);


    const columns:any[] =[
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1,cellClassName: "name-column--cell"}, // className used down in the code in custom Box style
        {field: "phone", headerName: "Phone Number",flex:1},
        {field: "email", headerName: "Email",flex:1},
        {field: "cost", headerName: "Cost",flex:1,
            renderCell: (params:any):ReactNode => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )},
        // renderCell is used even though IDE is complaining
        {field: "date", headerName: "Date",flex:1},

    ];

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances"/>
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
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    columns={columns}
                    rows={mockDataInvoices}
                />
            </Box>
        </Box>
    )
}

export default Invoices;

