import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Button, Card, TextField, Alert, FormControl } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const user = useAuth()
  const history = useHistory()

  const emailHandler = e => {
    setEmail(e.target.value)
  }

  const passwordHandler = e => {
    setPassword(e.target.value)
  }

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      history.push('/admin')
    } catch (err) {
      console.log(err.message)
    }
  }

  const submitHandler = async e => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login()
      setLoading(false)
    } catch (err) {
      setError('Failed to create an account')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='d-flex justify-content-center'>
      <Card className='w-50 py-3 text-center mt-2'>
        <h2 className='text-center mt-3'>Sign Up</h2>
        {user?.email}
        {error && <Alert variant='danger'>{error}</Alert>}
        <form className='d-flex flex-column py-2' onSubmit={submitHandler}>
          <FormControl className='mx-5'>
            <TextField
              className='my-3'
              type='email'
              label='Email'
              variant='outlined'
              onChange={emailHandler}
              value={email}
              fullWidth
            />
            <TextField
              className=''
              type='password'
              label='Password'
              variant='outlined'
              onChange={passwordHandler}
              value={password}
              fullWidth
            />
          </FormControl>
          <div className='m-2'>
            <Button disabled={loading} className='w-50 mt-4' type='submit'>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login
