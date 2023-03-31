import '../App.css';
import React, { useEffect, useState } from "react";
function Login() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState("");
    const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");
   // const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:8080/RestApi/fetchUser')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

    const deletePost = async (id) => {
        await fetch(`http://localhost:8080/RestApi/deleteUser/${id}`, {
           method: 'DELETE',
        }).then((response) => {
           if (response.status === 200) {
              setPosts(
                 posts.filter((post) => {
                    return post.id !== id;
                 })
              );
           } else {
              return;
           }
        });
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          addPosts(id,password);
       }; 
       
       const addPosts = async (id,password) => {
        await fetch(`http://localhost:8080/RestApi/loginUser`, {
          method: 'POST',
          body: JSON.stringify({
           // id: id,
            email:email,
            password:password,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
        }).then(response => response.json())
        .then(response => { 
          if(response.count==1){
            alert("Login Successfully");
          }else{
            alert("Try Again");
          }           
        }
       ) };
  return (
//     <main>
//       <h1>User List</h1>
//       <div className="posts-container">
//       <form onSubmit={handleSubmit}>
             
//       {/* <input type="text" 
//             name="id" 
//             placeholder="id"
//             onChange={(event) =>
//                 {
//                     setId(event.target.value);       
//                 }}           
//             /> */}

// <input type="email" 
//             name="email" 
//             placeholder="email"
//             onChange={(event) =>
//                 {
//                     SetEmail(event.target.value);       
//                 }}           
//             />

// <input type="password" 
//             name="password" 
//             placeholder="password"
//             onChange={(event) =>
//                 {
//                     setPassword(event.target.value);       
//                 }}           
//             />
//           <button type="submit"  >Login</button>
//           </form>
      
//    </div>
//     </main>
//   );


<div className="posts-container">
<h2>Login</h2>
<form onSubmit={handleSubmit}>
  {/* <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" placeholder="name" name="name"            
     onChange={(event) =>
      {
          setId(event.target.value);       
      }}           
  /><br></br>
  </div> */}
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" placeholder="email" name="email"         
       onChange={(event) =>
      {
          SetEmail(event.target.value);       
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
  <button type="submit">Login</button>
</form>
</div>
);
}
 

export default Login;
