function Navbar() {
  return (
    <div className="navbar">

      <h1>Tech.Care</h1>

      <div className="nav-links">
        <p>Overview</p>
        <p className="active">Patients</p>
        <p>Schedule</p>
        <p>Message</p>
        <p>Transactions</p>
      </div>

      <div className="doctor">
        <p>Dr. Jose Simmons</p>
      </div>

    </div>
  );
}

export default Navbar;