import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Food from './components/Food';

function App() {
 
  const [food,setProduct]=useState([])
  function fetchdata(){
    fetch("https://api.edamam.com/search?q=chicken&app_id=b887576b&app_key=dea3e2feee6b433df2ad550260dc4bfd&from=0&to=3&calories=591-722&health=alcohol-free")
    .then(res=>res.json())
    .then(data=>{
     console.log(data)
     setProduct(data.hits)
    })
  }
  useEffect(() => {
    fetchdata()
  }, [])



  return (
    <div className="App d-flex flex-wrap ">{

    
     food.map((fd)=>{
      return(
     <Food label={fd.recipe.label} 
      img={fd.recipe.image} 
      url={fd.recipe.url}
      calories={fd.recipe.calories}
      mealType={fd.recipe.mealType}
      dishType={fd.recipe.dishType}
      ></Food>
      )
       
     })
    }
    </div>
  );
}

export default App;
