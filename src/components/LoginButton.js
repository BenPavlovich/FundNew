import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0(); 
    {/*destructure const variable to equal our auth0 hook,
  isAuthenticated will hide login/logout button before or after signing in so it  displays correct option */} 
  return (
    !isAuthenticated && (
    <button onClick={() => loginWithRedirect()}>
        Login
    </button>
    )
  )
}

export default LoginButton