import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import {pageTitleSelector} from "../store/slices/page.slice";
import {useSelector} from "react-redux";

const drawerWidth: number = 240;

const AppBarContainer = styled(MuiAppBar)(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
}));

const AppBarComponent = () => {
    const title = useSelector(pageTitleSelector)
    return (
        <AppBarContainer position="absolute">
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    {title}
                </Typography>
            </Toolbar>
        </AppBarContainer>
    )
}

export default AppBarComponent;
