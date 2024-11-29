import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import IVFCalculator from './IVFCalculator'
import HomePage from './HomePage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(1)
  const [selectedAge, setSelectedAge] = useState("");
  const [ivfDetails, setIvfDetails] = useState({
    age: "",
    ivfCycle:1,
    pgtTesting: "",
    icsiProcedure:"",
    medicalCondition: {},
  })


  return (
    <div>
      <Navbar />
      {/* <IVFCalculator
        selectedAge={selectedAge}
        setSelectedAge={setSelectedAge}
        value={value}
        setValue={setValue}
      /> */}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <IVFCalculator
              ivfDetails={ivfDetails}
              setIvfDetails={setIvfDetails}
                selectedAge={selectedAge}
                setSelectedAge={setSelectedAge}
                value={value}
                setValue={setValue}
              />
            }
          />
          <Route path="/result" element={<HomePage ivfDetails={ivfDetails} />} />
        </Routes>
      </Router>

      {/* <HomePage selectedAge={selectedAge} value={value}/> */}
    </div>
  );
}

export default App
