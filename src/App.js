import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import { useAuthCtx } from './store/AuthContext';
import AddPage from './pages/AddPage';

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className='container'>
      <Toaster />
      <Navbar />
      <Switch>
        {!isLoggedIn && (
          <>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/register'>
              <RegisterPage />
            </Route>
          </>
        )}
        {isLoggedIn && (
          <>
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/add'>
              <AddPage />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
