import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {Route, Routes} from "react-router-dom";
import GiveConsent from "../pages/give-consent";
import Consents from "../pages/consents";
import * as React from "react";

const PageContainerComponent = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Routes>
                    <Route path="/give-consent" element={
                        <GiveConsent />
                    }/>
                    <Route path={"/consents"} element={
                        <Consents />
                    }/>
                    <Route path="/" element={
                        <Consents />
                    } />
                </Routes>
            </Container>
        </Box>
    )
}

export default PageContainerComponent;
