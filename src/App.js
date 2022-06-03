import React from 'react'
import './App.css';
import LoginButton from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from './components/Navbar/Navbar';
import { FundList } from './components/FundList/FundList';
import { Fund } from './components/Fund/Fund';

export const App = () => {
  const { isLoading } = useAuth0;

  if ( isLoading ) return <div>Loading...</div>
  return (
    <>
    <Navbar />
    <FundList />
    <LoginButton />
    <LogoutButton />
    <Profile />
    </>
  )
}
