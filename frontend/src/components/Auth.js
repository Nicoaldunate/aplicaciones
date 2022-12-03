import React from 'react'
import {Avatar, Button, Paper,Grid, Typography,Container} from '@material-ui/core'
import LockIcon from '@mui/icons-material/Lock';
import useStyles from './Styles'
//import { Container } from 'react-bootstrap';
import Input from './Input'

const Auth = () => {
    const classes = useStyles();
    const isSignup = false;
    const handleSubmit = () => {}
    const handleChange = () => {}
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
        <LockIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Registrarse' : 'Iniciar sesión'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
            isSignup && (
              <>
                <Input name="firstName" variant="outlined" label="Nombre" handleChange={handleChange} autoFoxus half></Input>
                <Input name="firstName" variant="outlined" label="Nombre" handleChange={handleChange} half></Input>
                </>
            )}
            <Input name="email" variant="outlined" label="Correo electrónico" handleChange={handleChange} type="email"></Input>
            <Input name="password" variant="outlined" label="Contraseña" handleChange={handleChange} type="password" handleShowPassword></Input>
            {isSignup && <Input name="confirmPassword" variant="outlined" label="Confirmar contraseña" handleChange={handleChange} type="password"></Input>}
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Registrarse' : 'Iniciar sesión'}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth