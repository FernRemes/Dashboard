// import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Footer/>
    </div>
  )
}

export default App
