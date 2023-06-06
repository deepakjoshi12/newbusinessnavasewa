import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="box item-1">
          <h3>Navaseve.</h3>
        </div>
        <div className="box item-2">
          <h1>Take the Hassles out of your services! Just Call Us</h1>
          <br/><br/><br/><br/>
        </div>
        <div className="box item-3">
          <div className="service service1">
            <img src="images/home-cleaning.jpg" alt="" />
            <h3>Home Cleaning</h3>
          </div>
          <div className="service service2">
            <img src="images/home-cleaning.jpg" alt="" />
            <h3>Beauty and Wellness</h3>
          </div>
          <div className="service service3">
            <img src="images/home-cleaning.jpg" alt="" />
            <h3>Appliance Repair</h3>
          </div>
          <div className="service service4">
            <img src="images/home-cleaning.jpg" alt="" />
            <h3>AC Service </h3>
          </div>
          
        </div>
        <div className="box item-4">
          <div>
            <h2>Services on Demand</h2>
            <div className="form-container">
              <form>
                <div className="frmgrp">
                  <label className="lbltxt">Name</label>
                  <input className="inputtxt" placeholder="Name" />
                </div>
                <div className="frmgrp">
                  <label className="lbltxt">Email Id</label>
                  <input className="inputtxt" placeholder="Email-Address" />
                </div>
                <div className="frmgrp">
                  <label className="lbltxt">Phone</label>
                  <input className="inputtxt" placeholder="Phone" />
                </div>
                <div className="frmgrp">
                  <label className="lbltxt">Services</label>
                  <select name="cars" id="cars" className="inputtxt">
                  <option value="home">Home Cleaning</option>
                  <option value="beauty">Beauty and Wellness</option>
                  <option value="appliance">Appliance and Repair</option>
                  <option value="ac">AC Service and Repair</option>
                </select>
                </div>
                <div className="frmgrp">
                  <label className="lbltxt">Message</label>
                  <input className="inputtxt" placeholder="Service" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="box item-5 footer">
          <h3>Contact</h3>
          <br/><br/><br/>
        </div>
      </div>
    </>
  );
}

export default App;
