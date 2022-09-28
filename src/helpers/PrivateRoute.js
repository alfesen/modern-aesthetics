import { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const PrivateRoute = ({
  component: Component,
  exact,
  strict,
  path,
  ...rest
}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return unsubscribe
  }, [])

  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        user ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to='/admin-login' />
        )
      }
    />
  )
}

export default PrivateRoute
