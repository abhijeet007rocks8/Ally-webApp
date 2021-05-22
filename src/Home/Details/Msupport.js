import React from 'react'
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
    db.collection("mentalsupport")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>{
        setDetails(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);


    return (
        <div>
            
        </div>
    )
}

export default Details;