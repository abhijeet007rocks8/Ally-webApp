import React ,{useState,useEffect}from "react";
import "./Details.css";
import Row from "./DetailRow/DetailRow";
import db from "../../firebase.js";
import firebase from "firebase";
import Select from 'react-select';


function Details() {

  const [details, setDetails] = useState([]);
  
  const data = [
    {value: 1,label: "All"},
    {value: 2,label: "Dehli"},
    {value: 3,label: "Mumbai"},
    {value: 4,label: "Chennai"},
    {value: 5,label: "Kolkata"},
    {value: 6,label: "Lucknow"},
    {value: 7,label: "Kanpur"},
    {value: 8,label: "Bhopal"},
    {value: 9,label: "Indore"},
    {value: 10,label: "Others"}
  ];
   
  const [selectedOption, setSelectedOption] = useState("All");
  const [city,setcity] = useState("All");
  
  const handleChange = e => {
    setSelectedOption(e);
    setcity(e.label);
  }


  useEffect(() => {
    db.collection("covidtestcenter")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="details">
      <div className="header">
        <p>COVID TEST CENTER</p>
      </div>
      <div style={{display: 'flex',width:'100%', flexDirection: 'column',alignItems: 'center'}}>
      <div style={{width:'315px'}}>
      <Select
            placeholder="Select City"
            value={selectedOption}
            options={data}
            onChange={handleChange} />
      </div>
      </div>
      <div className="details-body">
        {details.length==0?<div className="no-data"><p>!! SORRY NO DETAILS AVAILABLE !!</p></div>:
        details.map((node)=>{
          return(
            <>
              {(city=="All")&& <Row
              shop={node.name}
              address={node.address}
              number={node.number}
              resource={node.resource}
              whatsapp={node.whatsapp}
              city={node.city}/>}

              {(city!="All")&&(city!="")&&(node.city==city)&& <Row
              shop={node.name}
              address={node.address}
              number={node.number}
              resource={node.resource}
              whatsapp={node.whatsapp}
              city={node.city}/>}
            </>
        )})
        }
      </div>
    </div>
  );
}

export default Details;
