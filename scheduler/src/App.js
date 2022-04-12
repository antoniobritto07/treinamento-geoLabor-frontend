import React from 'react';

import Routes from './routes';
import { ToastProvider } from "react-toast-notifications";
import store from "./redux/store"
import { Provider } from "react-redux";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ToastProvider 
          placement="bottom-right" 
          transitionDuration="500" 
          autoDismiss="true"
        >
          <Routes />
        </ToastProvider>
      </Provider>
    </div>
  );
}
