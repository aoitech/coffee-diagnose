import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AmplifyProvider } from '@aws-amplify/ui-react';
// import awsconfig from './aws-amplify'
import { Amplify } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';


// Amplify.configure(awsconfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AmplifyProvider>
//     </AmplifyProvider>
//   </React.StrictMode>
// );