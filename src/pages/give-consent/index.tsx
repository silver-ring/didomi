import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {Box, Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {PostConsentBodyDto, usePostConsentMutation} from "../../store/apis/consent.api";

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
});

const GiveConsent = () => {

    const [saveConsent] = usePostConsentMutation()

    const formik = useFormik<PostConsentBodyDto>({
        initialValues: {
            name: '',
            email: '',
            newsletterAgree: false,
            adsAgree: false,
            statisticsAgree: false
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await saveConsent(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 10,
                        }}>

                        <TextField id="name" label="Name" variant="outlined" margin={"normal"}
                                   fullWidth
                                   value={formik.values.name}
                                   onChange={formik.handleChange}
                                   error={formik.touched.name && Boolean(formik.errors.name)}
                                   helperText={formik.touched.name && formik.errors.name}
                                   disabled={formik.isSubmitting}
                        />
                        <TextField id="email" label="Email address" variant="outlined" margin={"normal"}
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   disabled={formik.isSubmitting}
                        />
                        <label style={{
                            marginTop: 10,
                        }}>I agree to:</label>
                        <Box border={1} display={"flex"} flexDirection={"column"} paddingX={5}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox
                                        id="newsletterAgree"
                                        name="newsletterAgree"
                                        value={formik.values.newsletterAgree}
                                        onChange={formik.handleChange}
                                        disabled={formik.isSubmitting}
                                    />} label="Receive newsletter"
                                />
                                <FormControlLabel
                                    control={<Checkbox
                                        id="adsAgree"
                                        name="adsAgree"
                                        value={formik.values.adsAgree}
                                        onChange={formik.handleChange}
                                        disabled={formik.isSubmitting}
                                    />} label="Be shown targeted ads"/>
                                <FormControlLabel control={<Checkbox
                                    id="statisticsAgree"
                                    name="statisticsAgree"
                                    value={formik.values.statisticsAgree}
                                    onChange={formik.handleChange}
                                    disabled={formik.isSubmitting}
                                />} label="Contribute to anonymous visit statistics"/>
                            </FormGroup>
                        </Box>
                        <Button variant="contained" style={{
                            marginTop: 50
                        }} type="submit" disabled={formik.isSubmitting}
                        >Give consent</Button>
                    </Paper>
                </Grid>
            </Grid>
        </form>
    )
}

export default GiveConsent;
