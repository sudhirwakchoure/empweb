import React, { useEffect, useState } from "react";
import "../App.css";

function Delete() {
    const [posts, setPosts] = useState([]);
   // const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:8081/employees')
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
        await fetch(`http://localhost:8081/employees/${id}`, {
           method: 'DELETE',
        }).then((response) => {
           if (response.status === 200) {
            //   setPosts(
            //      posts.filter((post) => {
            //         return post.id !== id;
            //      })
            //   );
            alert(" user Deleted ")
                  window.location.reload();
              
           } else {

            alert(" user Not Deleted  Something worng ")

              return;
           }
        });
        };
  return (
    <main>
      <h1>User List</h1>
      <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.name}</h2> 
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                  <button onsubmit="window.reload()" type="submit">Delete </button>

                  </div>
               </div>                 
            </div>
         );
      })}
   </div>
    </main>
  );
}
 

export default Delete;
