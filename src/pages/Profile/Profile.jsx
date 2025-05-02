import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React from 'react'

const Profile = () => {

const [open, setOpen] = React.useState(false);
const roles = ["Admin" , "User" , "Manger"]

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
  const initialValues = {
    "First Name": "",
    "Last Name": "",
    "Email": "",
    "Contact Number": "",
    "Address 1": "",
    "Address 2": "",
    "Role": ""
  };

  const onSubmit = (values, { resetForm }) => {
    handleClick() ;
    resetForm();
  };

  const validationSchema = Yup.object({
    "First Name": Yup.string().required("First Name is required.").max(10, "Max 10 characters").min(3, "Min 3 characters"),
    "Last Name": Yup.string().required("Last Name is required.").max(10, "Max 10 characters").min(3, "Min 3 characters"),
    "Email": Yup.string().required("Email is required.").email('Invaild Email'),
    "Contact Number": Yup.string().required("Contact Number is required."),
    "Address 1": Yup.string().required("Address 1 Number is required."),
    "Address 2": Yup.string().required("Address 2 Number is required."),
    "Role": Yup.string().required("Contact Number is required."),

  })

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return (
    <>
      <Stack sx={{ width: "75%", textAlign: "center", margin: "auto" }}>
        <Typography sx={{color:"red" , textAlign : "center" , fontSize:24 , pt:"50px" , mb:"30px"}}>
                           Create New Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Stack direction="row" justifyContent="space-between" sx={{gap : 2}}>
              <TextField name='First Name' value={values['First Name']}  error={touched['First Name'] && !!errors['First Name']} helperText={touched['First Name'] && errors['First Name']} onChange={ handleChange} onBlur={ handleBlur} sx={{flex:1 }} id="outlined-basic" label="First Name" variant="outlined" />
              {/* {errors['First Name'] && touched['First Name'] && <Typography sx={{display:"block"}}>{errors['First Name']}</Typography>} */}
              <TextField name='Last Name' value={values['Last Name']}  error={touched['Last Name'] && !!errors['Last Name']} helperText={touched['Last Name'] && errors['Last Name']} onChange={ handleChange} onBlur={ handleBlur} sx={{flex:1 }} id="outlined-basic" label="Last Name" variant="outlined" />
              {/* {errors['Last Name'] && touched['Last Name'] && <Typography sx={{display:"block"}}>{errors['Last Name']}</Typography>} */}
            </Stack>
            <TextField  name='Email'  value={values['Email']} error={touched.Email && !!errors.Email} helperText={touched.Email && errors.Email} onChange={ handleChange} onBlur={ handleBlur} id="outlined-basic" label="Email" variant="outlined" />
            {/* {errors.Email && touched.Email && <Typography>{errors.Email}</Typography>} */}
            <TextField name='Contact Number' value={values['Contact Number']}  error={touched['Contact Number'] && !!errors['Contact Number']} helperText={touched['Contact Number'] && errors['Contact Number']} onChange={ handleChange} onBlur={ handleBlur} id="outlined-basic" label="Contact Number" variant="outlined" />
            {/* {errors['Contact Number'] && touched['Contact Number'] && <Typography>{errors['Contact Number']}</Typography>} */}
            <TextField  name='Address 1' value={values['Address 1']}  error={touched['Address 1'] && !!errors['Address 1']} helperText={touched['Address 1'] && errors['Address 1']} onChange={ handleChange} onBlur={ handleBlur} id="outlined-basic" label="Address 1" variant="outlined" />
            {/* {errors['Address 1'] && touched['Address 1'] && <Typography>{errors['Address 1']}</Typography>} */}
            <TextField  name='Address 2' value={values['Address 2']}  error={touched['Address 2'] && !!errors['Address 2']} helperText={touched['Address 2'] && errors['Address 2']} onChange={ handleChange} onBlur={ handleBlur} id="outlined-basic" label="Address 2" variant="outlined" />
            {/* {errors['Address 2'] && touched['Address 2'] && <Typography sx={{background :"red"}}>{errors['Address 2']}</Typography>} */}
            
            <TextField
            
            name='Role'
            value={values["Role"]}
          id="outlined-select-currency-native"
          select
          label="Role"
          // defaultValue="EUR"
       
          onChange={handleChange}
          onBlur={handleBlur}   
          error={touched.Role && !!errors.Role}
          helperText="Please select your Role"
        >
          {roles.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      
            <Button type='submit'  variant='contained'>
              Create New Profile
            </Button>
            <Snackbar anchorOrigin={{ vertical : "top", horizontal : "center"}} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Account created successfully!
        </Alert>
        </Snackbar>
          </Box>


        </form>

       
      </Stack>
    </>
  )
}

export default Profile

// import { Box, Button, Stack, TextField } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import React from 'react';

// const Profile = () => {
//   const [open, setOpen] = React.useState(false);
//   const roles = ['Admin', 'User', 'Manager'];

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setOpen(false);
//   };

//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     contactNumber: '',
//     address1: '',
//     address2: '',
//     role: ''
//   };

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required.').max(10).min(3),
//     lastName: Yup.string().required('Last Name is required.').max(10).min(3),
//     email: Yup.string().required('Email is required.').email('Invalid Email'),
//     contactNumber: Yup.string().required('Contact Number is required.'),
//     address1: Yup.string().required('Address 1 is required.'),
//     address2: Yup.string().required('Address 2 is required.'),
//     role: Yup.string().required('Role is required.')
//   });

//   const onSubmit = (values, { resetForm }) => {
//     handleClick();
//     resetForm();
//   };

//   const {
//     values,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     errors,
//     touched
//   } = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit
//   });

//   return (
//     <Stack sx={{ width: '75%', textAlign: 'center', margin: 'auto' }}>
//       <form onSubmit={handleSubmit}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//           <Stack direction="row" justifyContent="space-between" sx={{ gap: 2 }}>
//             <TextField
//               name="firstName"
//               value={values.firstName}
//               error={touched.firstName && !!errors.firstName}
//               helperText={touched.firstName && errors.firstName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               sx={{ flex: 1 }}
//               label="First Name"
//               variant="outlined"
//             />
//             <TextField
//               name="lastName"
//               value={values.lastName}
//               error={touched.lastName && !!errors.lastName}
//               helperText={touched.lastName && errors.lastName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               sx={{ flex: 1 }}
//               label="Last Name"
//               variant="outlined"
//             />
//           </Stack>

//           <TextField
//             name="email"
//             value={values.email}
//             error={touched.email && !!errors.email}
//             helperText={touched.email && errors.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             label="Email"
//             variant="outlined"
//           />

//           <TextField
//             name="contactNumber"
//             value={values.contactNumber}
//             error={touched.contactNumber && !!errors.contactNumber}
//             helperText={touched.contactNumber && errors.contactNumber}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             label="Contact Number"
//             variant="outlined"
//           />

//           <TextField
//             name="address1"
//             value={values.address1}
//             error={touched.address1 && !!errors.address1}
//             helperText={touched.address1 && errors.address1}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             label="Address 1"
//             variant="outlined"
//           />

//           <TextField
//             name="address2"
//             value={values.address2}
//             error={touched.address2 && !!errors.address2}
//             helperText={touched.address2 && errors.address2}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             label="Address 2"
//             variant="outlined"
//           />

//           <TextField
//             name="role"
//             value={values.role}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.role && !!errors.role}
//             helperText={touched.role && errors.role}
//             select
//             label="Role"
//           >
//             {/* <MenuItem value=""><em>Select Role</em></MenuItem> */}
//             {roles.map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>

        

//           <Button type="submit" variant="contained">
//             Create New Profile
//           </Button>

//           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//             <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
//               Profile created successfully!
//             </Alert>
//           </Snackbar>
          
//         </Box>
//       </form>
//     </Stack>
//   );
// };

// export default Profile;
