import '../App.css';
import React, { useEffect, useState } from "react";
function FetchData() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("http://localhost:8081/employees")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <main>
      <h1>User List</h1>
      <form>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
          <div className='fetch'> 
                id={userObj.id}
                name={userObj.name}, 
                email={userObj.email} ,
                password={userObj.password}

          </div>
          ))}
      </ul>
    
      </form>
    </main>
  );
}
 

export default FetchData;
