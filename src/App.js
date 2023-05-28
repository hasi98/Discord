
import './index.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/channels" element={<Home />}/>
      </Routes>
    </Router>
  );
}

// function Home() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }


function Landing() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
export default App;
