import React, { useEffect, useState } from "react";
import "../App.css"
function Update() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

   // const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:8081/employees/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

        const handleSubmit = (e) => {
          e.preventDefault();
          addPosts(id,name,password,email);
       }; 
       
       const addPosts = async (id) => {
          await fetch(`http://localhost:8081/employees/${id}`, {
            method: 'PUT',
          body: JSON.stringify({
             id: id,
             name:name,
             email:email,
             password:password,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
        }).then((response) => {
           if (response.status === 200) {
            //   setPosts(
            //      posts.filter((post) => {
            //         return post.id !== id;
            //      })
            //   );
            alert(" user Update ")
            window.location.replace("http://localhost:3000/data");


           } else {

            alert(" user not  Update please check somting worng ")

              return;
           }
        });
        };
  return (
    <div className="posts-container">
    <h2>Update</h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="id">Id:</label>
        <input type="text" placeholder="ID" name="id"            
         onChange={(event) =>
          {
              setId(event.target.value);       
          }}           
      /><br></br>
      </div>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="name" name="name"            
         onChange={(event) =>
          {
              setName(event.target.value);       
          }}           
      /><br></br>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="email" name="email"         
           onChange={(event) =>
          {
              setEmail(event.target.value);       
          }}           
      /><br></br>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="password" name="password" 
                    onChange={(event) =>
                      {
                          setPassword(event.target.value);       
                      }}           
                  /><br></br>
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
); 
}
 

export default Update;
