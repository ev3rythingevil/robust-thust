import CakeCard from "./CakeCard";
import Header from "./Header";
import Search from "./Search";
import { useState , useEffect} from 'react';
import CakeDetail from "./CakeDetail";
import CakeForm from "./CakeForm";
import FlavorZone from './FlavorZone'

function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake , setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState([])
  const [flavorSaver , setFlavorSaver] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/cakes')
    .then( resp => resp.json())
    .then(data => setCakes(data)) 

    fetch('http://localhost:4000/flavor')
    .then( resp => resp.json())
    .then(data => setFlavorSaver(data))
  } , []
  )

  

  function handleAddCake(cake){
    setCakes([
      ...cakeList, cake
    ])
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
    {selectedCake? <CakeDetail cake={selectedCake} /> : null}
    {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/> )}
  </>
  );
}

export default App;


// we need a header, a search bar, and a cake section