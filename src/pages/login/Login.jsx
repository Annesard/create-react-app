import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'
import {
  Btns,
  Card,
  CardContent,
  CardTitle,
  Form,
  FormContent,
  LoginCard,
  Close,
  LoginBtn,
  ForgotPass,
  ForgotPassA
} from './Login.styles'

function hideLogin() {
  document.getElementById('login1').style.display = 'none'
}

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    authService
      .registerUser(login, password)
      .then(() => history.replace('/login'))
      .catch(() => setError(error))
  }

  return (
    <LoginCard id="login1">
      <Card>
        <CardContent>
          <Close onClick={hideLogin} title="Close Signup">
            &times;
          </Close>
          <CardTitle>
            <h2>Login</h2>
          </CardTitle>
          <Form onSubmit={onSubmit} error={error} defaultValues={{ login: '', password: '' }}>
            <label htmlFor="user-name" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Username
            </label>
            <FormContent type="username" name="username" required />
            <label htmlFor="user-password" style={{ paddingTop: '22px', color: '#ABAAAA' }}>
              &nbsp;Password
            </label>
            <FormContent type="password" name="password" required />
            <ForgotPassA href="#">
              <ForgotPass id="forgot-pass">Forgot password?</ForgotPass>
            </ForgotPassA>
            <Btns>
              <LoginBtn type="submit" name="submit" value="Login" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </LoginCard>
  )
}

export default Login