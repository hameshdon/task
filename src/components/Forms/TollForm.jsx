import React from "react";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark} from "@fortawesome/free-solid-svg-icons";


const options = [
    {
      label: "Car/Jeep/Van",
      value: "Car/Jeep/Van",
    },
    {
      label: "LCV",
      value: "LCV",
    },
    {
      label: "Truck/Bus",
      value: "Truck/Bus",
    },
    {
      label: "Heavy vehicle",
      value: "Heavy vehicle",
    },
  ];


export default function TollForm({toll,children,onClose}) {
    if (!toll) return null;
    return(
        <div>
            <div className="vehicle-form-container">
               <div className="vehicle-form-card" >
              <div style={{justifyContent:"end",display:"flex"}}>
               <FontAwesomeIcon  onClick={onClose} icon={faXmark} />
               </div>
                <p style={{textAlign:"center"}}>Add new toll</p>
                <form>
                   <div style={{display:"flex",flexDirection:"column"}}>
                    <label className="label-text">
                        Toll Name
                    </label>
                    <input className="input-field" placeholder="Enter toll name" type="text"/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column", marginTop:"8px"}}>
                    <label  className="label-text">
                        Vehicle Fare Details
                    </label>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"14px"}}>
                    <select className="input-field">
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    <input className="input-field" placeholder="Single journey" type="number"/>
                    <input className="input-field" placeholder="Return Journey" type="number"/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"14px"}}>
                    <select className="input-field">
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    <input className="input-field" placeholder="Single journey" type="number"/>
                    <input className="input-field" placeholder="Return Journey" type="number"/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"14px"}}>
                    <select className="input-field">
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    <input className="input-field" placeholder="Single journey" type="number"/>
                    <input className="input-field" placeholder="Return Journey" type="number"/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"14px"}}>
                    <select className="input-field">
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    <input className="input-field" placeholder="Single journey" type="number"/>
                    <input className="input-field" placeholder="Return Journey" type="number"/>
                    </div>
                    </div>
                    <button className="btn-add">
                        Add Toll Details
                    </button>
                </form>
              
                </div>
            </div>
            
           
        </div>
    )
}
 