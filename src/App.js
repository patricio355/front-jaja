import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [canchas, setCanchas] = useState([]);

  const getCanchas = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setCanchas(response.usuarios);
      
    } catch (error) {
      console.error(error);
    } 
  };



  useEffect(() => {
    getCanchas('http://localhost:3000/api/users/');
  }, []);


 




  return (

    <div>
      {canchas.map((usuario) => (
        <div key={usuario.idusers}>
        
          <div>
            <h1>{usuario.nombre}</h1>
          </div>
        </div>
      ))}
       
</div>


  );
}

export default App;
