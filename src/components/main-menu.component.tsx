import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import {pageSlice} from "../store/slices/page.slice";
import {useDispatch} from "react-redux";

const MainMenuComponent = () => {
    const dispatch = useDispatch()

    const onClickLink = (title: string) => {
        dispatch(pageSlice.actions.setPageTitle(title))
    }

    return (
        <>
            <Link to="/give-consent" onClick={() => {
                onClickLink('Give Consent')
            }}>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Give Consent"/>
                </ListItemButton>
            </Link>
            <Link to="/consents" onClick={() => {
                onClickLink('Consents')
            }}>
                <ListItemButton>
                    <ListItemIcon>
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Collected Consents"/>
                </ListItemButton>
            </Link>
        </>
    );
}

export default MainMenuComponent;
