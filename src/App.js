import Form from './pages/Form';
import Display from './pages/Display';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
