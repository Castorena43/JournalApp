import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {

  return (
    <Route { ...rest }
      component={ (props) => (
        (isLoggedIn)
          ? (<Component { ...props } />)
          : ( <Redirect to='/auth/login' />)
      )}
    />
  )
}
