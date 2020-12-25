import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile';
import SideBar from './components/sidebar/SideBar.jsx';


function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <SideBar />      
            <Profile />
        </div>);
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HI-Nikita )) <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
