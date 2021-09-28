import CakeCard from "./CakeCard";
import Header from "./Header";
import Search from "./Search";
import { useState , useEffect} from 'react';
import CakeDetail from "./CakeDetail";
import CakeForm from "./CakeForm";
import FlavorZone from './FlavorZone'

function App() {
  // states
  const [visible, setVisible] = useState(false);
  const [selectedCake , setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState([])
  const [flavorSaver , setFlavorSaver] = useState([])

 //effects
  useEffect(()=> {
    fetch('http://localhost:4000/cakes')
    .then( resp => resp.json())
    .then(data => setCakes(data)) 

    fetch('http://localhost:4000/flavor')
    .then( resp => resp.json())
    .then(data => setFlavorSaver(data))
  } , []
  )

  
  // functions

  function handleUpdate(cake){
    console.log(cake)
    fetch(`http://localhost:4000/cakes/${cake.id}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({liked:!cake.liked})
    })
    .then(res => res.json())
    .then(updatedCake => {
      const updatedCakeList = cakeList.map(clCake => clCake.id === cake.id? updatedCake : clCake);
      
      
    setSelectedCake(updatedCake)
    setCakes(updatedCakeList)
    });
  }



  function handleAddCake(cake){
    fetch('http://localhost:4000/cakes',{
      method : 'POST',
      headers: {
        "COntent-Type": 'application/json',
      },
      body: JSON.stringify(cake)
    })
    .then(res => res.json())
    .then(newCake => {
      setCakes([
      ...cakeList, newCake
      ])
  })
}  
    
  function handleDelete(id){
      fetch(`http://localhost:4000/cakes/${id}`,{
        method : 'DELETE'
      })
      .then(res => res.json())
      .then(() => {
        const filteredCakes = cakeList.filter(cake => cake.id !== id)     
        setCakes(filteredCakes)
        setSelectedCake(null)
      }
    )
  }



  return ( 
    <>
    <Header />
    <CakeForm handleAddCake={handleAddCake}/>
    {visible? <Search /> : null}
    <button onClick={() => setVisible(!visible)}>{visible?'x' : 'Form'}</button>
    <br/>
    <FlavorZone flavorSaver = {flavorSaver}/>
    <br></br>
    {selectedCake? <CakeDetail handleUpdate={handleUpdate} handleDelete={handleDelete} cake={selectedCake} /> : null}
    {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/> )}
  </>
  );
}

export default App;


// we need a header, a search bar, and a cake section