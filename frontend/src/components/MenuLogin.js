import React from 'react'
import {Form, Button} from 'react-bootstrap'


const MenuLogin = () => {
  return (
    <div>
        <br/>
        <Form style={{width: '80%', marginLeft:"10%"}}>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
        </Form>
    </div>
  )
}

export default MenuLogin