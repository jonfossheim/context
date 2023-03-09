import DummyComponent from './components/DummyComponent';
import { useContext } from 'react';
import { UserContext } from './context';

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <DummyComponent />
    </div>
  );
};

export default App;
