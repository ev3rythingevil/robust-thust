import CakeCard from "./CakeCard";
import Header from "./Header";
import Search from "./Search";
import { cakes } from "./data";
import { useState} from 'react';
import CakeDetail from "./CakeDetail";


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake , setSelectedCake] = useState(null)

  return ( 
    <>
    <Header />
    {visible? <Search /> : null}
    <button onClick={() => setVisible(!visible)}>{visible?'x' : 'Form'}</button>
    <br></br>
    {selectedCake? <CakeDetail cake={selectedCake} /> : null}
    {cakes.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake}/> )}
  </>
  );

  
}

export default App;


// we need a header, a search bar, and a cake section