import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Planner from './pages/Planner';
import MyPlans from './pages/MyPlans';
import Explore from './pages/Explore';
import About from './pages/About';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/plans' element={<MyPlans />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  );
}
