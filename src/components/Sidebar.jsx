function Sidebar({ patients, setSelectedPatient, selectedPatient }) {

  return (

    <div className="sidebar">

      <h2>Patients</h2>

      {patients.map((patient, index) => (

        <div
  key={patient.name}
  className={
    selectedPatient?.name === patient.name
      ? "patient active-patient"
      : "patient"
  }
  onClick={() => setSelectedPatient(patient)}
>
            <p>{patient.name}</p>

          <span>
            {patient.gender}, {patient.age}
          </span>

        </div>

      ))}

    </div>
  );
}

export default Sidebar;