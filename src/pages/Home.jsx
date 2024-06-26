import { useState, useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

const getTutorials = async ()=> {
// const URL ="https://tutorial-api.fullstack.clarusway.com/tutorials/"
  const res = await axios (process.env.REACT_APP_URL)
    setTutorials(res.data)
}

useEffect(() => {
  
getTutorials()

  }, [])



  return (
    <>
      <AddTutorial getTutorials={getTutorials}/>
      <TutorialList tutorials ={tutorials} getTutorials={getTutorials}/>
    </>
  );
};

export default Home;
