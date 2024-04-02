import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Playground from './Pages/Playground';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Settings from './Pages/Settings';

function App() {
  return (
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
  );
}

export default App;
