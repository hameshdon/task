import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faL } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import TollForm from "./Forms/TollForm";
import VehicleForm from "./Forms/VehicleForm";
// import {Modal} from reactstrap
function HomePage() {
  const [tollform, setTollForm] = useState(false);
  const [vehicleForm, setVehicleForm] = useState(false);
  const history = useNavigate();
  return (
    <>
    <div>
      <h1 className="main-layout">Toll Management Application</h1>
      <hr />

      <div style={{ display: "flex", marginTop: "27px" }}>
        <p className="toll-text" >Toll entries/Vehicles entries </p>

        <FontAwesomeIcon
          style={{ marginTop: "6px", marginRight: "14" }}
          icon={faFilter}
        />
        <form>
          <input
            className="search-input"
            type="search"
            placeholder="Search vehicle"
          />
        </form>

        <div style={{ marginLeft: "38rem" }}>
          <button className="add"  onClick={() => setVehicleForm(true)}>Add vehicle entry</button>
          <button className="add" onClick={() => setTollForm(true)}>
            Add new entry
          </button>
          

          <button className="add" onClick={() => history("./tollpage")}>View all tolls</button>
        </div>
      </div>

      <div className="vehicle-entry">
        <p style={{ paddingRight: "9rem" }}>VEHICLE TYPE</p>
        <p>VEHICLE NUMBER</p>
        <p>DATE/TIME</p>
        <p>TOLL NAME</p>
        <p>TARIFF</p>
      </div>
    </div>
    <div>
        <TollForm toll={tollform} onClose={() =>setTollForm(false)}/>
    </div>
    <div>
        <VehicleForm vehicle={vehicleForm} onClose={() =>setVehicleForm(false)}/>
    </div>
    </>
  );
}
export default HomePage;
