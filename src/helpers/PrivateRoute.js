import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({
  component: Component,
  exact,
  strict,
  path,
  ...rest
}) => {
  const user = useAuth()

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
