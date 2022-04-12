import React from 'react';

import Routes from './routes';
import { ToastProvider } from "react-toast-notifications";


export default function App() {
  return (
    <div>
      <ToastProvider 
        placement="bottom-right" 
        transitionDuration="500" 
        autoDismiss="true"
      >
        <Routes />
      </ToastProvider>
    </div>
  );
}
