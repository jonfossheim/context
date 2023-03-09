import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import reportWebVitals from './reportWebVitals';
import { UserContext, ThemeContext } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));

const ContextProvider = (props) => {
  const [user, setUser] = useState({ name: 'John', last: 'Doe', auth: false });

  const [theme, setTheme] = useState(false);

  const toggleAuth = () => {
    setUser({ ...user, auth: !user.auth });
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={{ user, toggleAuth }}>
          {props.children}
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
