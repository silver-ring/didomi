import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MainMenuComponent from "./main-menu.component";

const drawerWidth: number = 240;

const DrawerContainer = styled(MuiDrawer)(() => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    }),
);

const DrawerComponent = () => {
    return (
        <DrawerContainer variant="permanent" open>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
            </Toolbar>
            <Divider />
            <List component="nav">
                <MainMenuComponent />
            </List>
        </DrawerContainer>
    );
}

export default DrawerComponent;
