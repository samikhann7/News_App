import './App.css';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';

// export default class App extends Component {
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }
//   render() {
//     return (
//       <>
//         <Router>
//           <div>
//             <div>
//               <LoadingBar
//               height={3.5}
//                 color='#f11946'
//                 progress={this.state.progress}
//               /></div>
//             <NavBar />
//             <div className='to'>
//             <h2>Top News</h2>
//             </div>
//             <Routes>

//               <Route path="/Business" element={<News setProgress={setProgress }  key="1" cat='business' country='in' />} />
//               <Route path="/Entertainment" element={<News setProgress={setProgress }  key="2" cat='entertainment' country='in' />} />
//               <Route path="/" element={<News setProgress={setProgress }  key="3" cat='general' country='in' />} />
//               <Route path="/General" element={<News setProgress={setProgress }  key="4" cat='general' country='in' />} />
//               <Route path="/Health" element={<News setProgress={setProgress }  key="5" cat='health' country='in' />} />
//               <Route path="/Sports" element={<News setProgress={setProgress }  key="6" cat='sports' country='in' />} />
//               <Route path="/Science" element={<News setProgress={setProgress }  key="7" cat='science' country='in' />} />
//               <Route path="/Technology" element={<News setProgress={setProgress }  key="8" cat='technology' country='in' />} />
//             </Routes>
//           </div>
//         </Router>
//       </>
//     )
//   }
// }

const App=()=>{
  const[progress, setProgress]=useState(0)
  return (
    <>
      <Router>
        <div>
          <div>
            <LoadingBar
            height={3.5}
              color='#f11946'
              progress={progress}
            /></div>
          <NavBar />
          <div className='to'>
          <h2>Top News</h2>
          </div>
          <Routes>

            <Route path="/Business" element={<News setProgress={setProgress }  key="1" cat='business' country='in' />} />
            <Route path="/Entertainment" element={<News setProgress={setProgress }  key="2" cat='entertainment' country='in' />} />
            <Route path="/" element={<News setProgress={setProgress }  key="3" cat='general' country='in' />} />
            <Route path="/General" element={<News setProgress={setProgress }  key="4" cat='general' country='in' />} />
            <Route path="/Health" element={<News setProgress={setProgress }  key="5" cat='health' country='in' />} />
            <Route path="/Sports" element={<News setProgress={setProgress }  key="6" cat='sports' country='in' />} />
            <Route path="/Science" element={<News setProgress={setProgress }  key="7" cat='science' country='in' />} />
            <Route path="/Technology" element={<News setProgress={setProgress }  key="8" cat='technology' country='in' />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App

//nodemon start app.js