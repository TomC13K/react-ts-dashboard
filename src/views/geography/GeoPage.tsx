import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens, ThemeObject, Colors } from "../../theme";

const GeoPage:React.FC = () => {
    const theme: ThemeObject = useTheme();
    const colors: Colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geography" subtitle="Simple Geography Chart" />

            <Box
                height="75vh"
                border={`1px solid ${colors.grey[100]}`}
                borderRadius="4px"
            >
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default GeoPage;