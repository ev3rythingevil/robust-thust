import CakeCard from "./CakeCard";
import Header from "./Header";
import Search from "./Search";
import { cakes } from "./data";
import { useState} from 'react';
import CakeDetail from "./CakeDetail";
import CakeForm from "./CakeForm";


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake , setSelectedCake] = useState(null)
  const [cakeList, setCakes] = useState(cakes);
  
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
    <br></br>
    {selectedCake? <CakeDetail cake={selectedCake} /> : null}
    {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/> )}
  </>
  );
}

export default App;


// we need a header, a search bar, and a cake section