import { UserContext, ThemeContext } from '../context';
import { useContext } from 'react';

const DummyComponent = () => {
  const { user, toggleAuth } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>THEME TOGGLE</button>
      <button onClick={toggleAuth}>Update</button>
      <h3>{user.auth ? 'Logged in' : 'Logged Out'}</h3>
      <p>{user.name}</p>
    </div>
  );
};

export default DummyComponent;
