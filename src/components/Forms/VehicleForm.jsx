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
  const tollList = [
    {
      label: "All",
      value: "Car/Jeep/Van",
    },
    {
      label: "Kappalur",
      value: "Kappalur",
    },
    {
      label: "Chengalpattu",
      value: "Chengalpattu",
    },
    {
      label: "Krishnagiri",
      value: "Krishnagiri",
    },
  ];


export default function VehicleForm({vehicle,children,onClose}) {
    if (!vehicle) return null;
    return(
        <div>
            <div className="vehicle-form-container">
               <div className="vehicle-form-two-card " >
              <div style={{justifyContent:"end",display:"flex"}}>
               <FontAwesomeIcon  onClick={onClose} icon={faXmark} />
               </div>
                <p style={{textAlign:"center"}}>Add new entry</p>
                <form>
                   <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                        Select toll Name
                    </label>
                    <select className="input-field">
                        
           
            {tollList.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                        Select vehicle type
                    </label>
                    <select className="input-field">
                        
           
            {options.map((option) => (
               
              <option value={option.value}>{option.label}</option>
             
            ))}
           
          </select>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                     Vehicle Number
                    </label>
                    <input className="input-field" placeholder="Enter login id" type="text"/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"18px"}}>
                    <label className="label-text">
                      Tariff
                    </label>
                    <input className="input-field" placeholder="Tariff amount" type="text"/>
                    </div>
                  
                    <button className="btn-add" style={{width:"19rem"}}>
                        Add Vehicle Entry
                    </button>
                </form>
              
                </div>
            </div>
            
           
        </div>
    )
}
 