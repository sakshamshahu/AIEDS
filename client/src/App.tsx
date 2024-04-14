import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Playground from './Pages/Playground';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Settings from './Pages/Settings';
import UserProvider from './context/userContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loading from './components/global/Loading';

function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <UserProvider>
        <PersistGate loading={<Loading/>} persistor={persistor}>
          <div className="w-full h-fit bg-primary-background">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        </PersistGate>
      </UserProvider>
    </Provider>
  );
}

export default App;
