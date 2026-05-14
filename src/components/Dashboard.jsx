import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard({ selectedPatient }) {

  if (!selectedPatient) {
    return <h1>Loading...</h1>;
  }

  // LAST 6 MONTHS + CORRECT ORDER
  const chartData = [...selectedPatient.diagnosis_history]
    .slice(0, 6)
    .reverse()
    .map((item) => ({
      month: item.month,
      systolic: item.blood_pressure.systolic.value,
      diastolic: item.blood_pressure.diastolic.value,
    }));

  // LATEST REPORT
  const latestReport = selectedPatient.diagnosis_history[0];

  return (

    <div className="dashboard">

      <div className="dashboard-layout">

        {/* LEFT SECTION */}

        <div className="left-dashboard">

          <div className="section-card">

            <h1 className="section-title">
              Diagnosis History
            </h1>

            {/* GRAPH */}

            <div className="graph">

              <h2>Blood Pressure Chart</h2>

              <ResponsiveContainer width="100%" height={250}>

                <LineChart data={chartData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#ff69b4"
                    strokeWidth={3}
                  />

                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#6c63ff"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            {/* HEALTH CARDS */}

            <div className="cards">

              <div className="card">

                <h3>Heart Rate</h3>

                <h1>
                  {latestReport.heart_rate.value} bpm
                </h1>

                <p>
                  {latestReport.heart_rate.levels}
                </p>

              </div>

              <div className="card">

                <h3>Temperature</h3>

                <h1>
                  {latestReport.temperature.value}°F
                </h1>

                <p>
                  {latestReport.temperature.levels}
                </p>

              </div>

              <div className="card">

                <h3>Respiratory Rate</h3>

                <h1>
                  {latestReport.respiratory_rate.value} bpm
                </h1>

                <p>
                  {latestReport.respiratory_rate.levels}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="right-dashboard">

          <div className="profile">

            <img
              src={selectedPatient.profile_picture}
              alt={selectedPatient.name}
            />

            <h2>
              {selectedPatient.name}
            </h2>

            <p>
              Gender: {selectedPatient.gender}
            </p>

            <p>
              Age: {selectedPatient.age}
            </p>

            <p>
              Phone: {selectedPatient.phone_number}
            </p>

            <p>
              Date of Birth: {selectedPatient.date_of_birth}
            </p>

            <p>
              Emergency Contact:
              {" "}
              {selectedPatient.emergency_contact}
            </p>

            <p>
              Insurance:
              {" "}
              {selectedPatient.insurance_type}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;