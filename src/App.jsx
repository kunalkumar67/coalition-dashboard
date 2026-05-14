import { useEffect, useState } from "react";
import { fetchPatients } from "./services/api";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {

  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {

    const getData = async () => {

      try {

        const data = await fetchPatients();

        setPatients(data);
        setSelectedPatient(data[0]);

      } catch (error) {

        console.log(error);

      }
    };

    getData();

  }, []);

  return (

    <div className="app-container">

      <Sidebar
       patients={patients}
       selectedPatient={selectedPatient}
       setSelectedPatient={setSelectedPatient}
      />

      <div className="main-content">

        <Navbar />

        <Dashboard selectedPatient={selectedPatient} />

      </div>

    </div>
  );
}

export default App;