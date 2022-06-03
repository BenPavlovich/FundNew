import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN; //grabs environmental variables
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
    <Auth0Provider
    domain ="dev-f0vtythm.us.auth0.com"
    clientId="eNb3SBbpE6lDbzIL8NEITnniG1jXevry"
        redirectUri={window.location.origin}> {/*this will pass out current url and will redirect us back to this url  …*/} 
        < App />
    </Auth0Provider>
    </React.StrictMode>
 
);