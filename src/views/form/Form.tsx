import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    address1: string;
    address2: string;
}

const initialValues:IFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegEx = /^(\+\d{1,3}[- ]?)?\d{10}$/; //regex for phone number

const userSchema: yup.ObjectSchema<IFormValues> = yup.object().shape({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    email: yup
        .string()
        .email("Invalid Email")
        .required("Email is Required"),
    contact: yup
        .string()
        .matches(phoneRegEx, "Invalid Phone Number")
        .required("Contact is Required"),
    address1: yup.string().required("Address is Required"),
    address2: yup.string().required("Address is Required"),
})

const Form:React.FC =() =>{
    const isNonMobile:boolean = useMediaQuery('(min-width:600px)');  //when hit 600px, it will be true - can use media query in react not just css
    const handleFormSubmit = (values:IFormValues) => {
        console.log(values)
    }

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile"/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
                >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>

                        {/*gridTemplateColumns - 4 columns, minmax(0,1fr) - min width 0, max width 1fr*/}
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0,1fr))"
                            sx={{
                                "& > div": { gridColumn:  isNonMobile ? undefined: "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="FirstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{
                                    gridColumn:"span 2"
                                }}
                                >
                                {/*if it is not touched the error will dont get helper text from validation*/}
                                {/* gridColumn span 2 takes 2 grids from total of 4 if not mobile*/}
                            </TextField>

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}

            </Formik>
        </Box>
    )
}

export default Form