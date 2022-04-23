import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
const App =()=> {
  const pageSize = 9
  const apiKey = 'd367e41e478242848f16e65ef4043516'
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <LoadingBar
            color='#f11946'
            progress={progress}
            height = {4}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
            <Route path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App