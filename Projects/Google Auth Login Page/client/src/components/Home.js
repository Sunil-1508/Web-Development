import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Home() {
  const [userdata, setuserdata] = useState({});

  const getUser = async () => {
    try{
      const response = await axios.get('http://localhost:5001/google/userdata',{withCredentials:true});
      setuserdata(response.data.users);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div>
        {userdata.name}
        <img src={userdata.image} alt="user pic" />
        {userdata.email}
    </div>
  )
}

export default Home
