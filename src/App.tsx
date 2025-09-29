import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import LCAInput from './pages/LCAInput';
import Analysis from './pages/Analysis';
import Reports from './pages/Reports';
import CircularityFlow from './pages/CircularityFlow';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/input" element={<LCAInput />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/circularity" element={<CircularityFlow />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;