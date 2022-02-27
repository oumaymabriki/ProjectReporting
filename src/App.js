import './App.css';
import { Routes as AppRoutes } from './routes/';
import { BrowserRouter, Switch } from 'react-router-dom';
function App() {

  const isAuthorized = false; // here we put our api with React context
  return (
    <Switch>
      <AppRoutes authorized={isAuthorized} />
    </Switch>
  );
}
export default App;
