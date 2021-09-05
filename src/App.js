import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <>
 {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
 {/* <Navbar /> */}
 <Navbar title="TextUtils" />
 <div className="container">
 <TextForm heading="Enter the text to analyze" />
 </div>
 
    </>
  );
}

export default App;
