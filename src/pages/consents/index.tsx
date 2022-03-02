import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import { useLazyGetConsentQuery } from "../../store/apis/consent.api";
import {useEffect} from "react";
import styled from "@emotion/styled";

const MainContainer = styled(Paper)(() => ({
    sx: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    }
}))

const GridContainer = styled("div")(() => ({
    height: 300,
    width: '100%'
}))

const Consents = () => {

    const [pageSize, setPageSize] = React.useState<number>(2);
    const [getConsentTrigger, consentsQuery] = useLazyGetConsentQuery();


    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <MainContainer>
                <GridContainer>
                    <DataGrid
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        pagination
                        rows={rows}
                        columns={columns}
                    />
                </GridContainer>
            </MainContainer>
            </Grid>
        </Grid>
    )
}

export default Consents;
