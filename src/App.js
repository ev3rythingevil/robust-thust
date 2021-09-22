import CakeCard from "./CakeCard";
import Header from "./Header";
import Search from "./Search";
import { cakes } from "./data";
import { useState} from 'react';


function App() {
  const [visible, setVisible] = useState(false);
  return ( 
    <>
    <Header />
    {visible? <Search /> : null}
    <button onClick={() => setVisible(!visible)}>{visible?'x' : 'Form'}</button>
    {cakes.map(cake => <CakeCard cake={cake}/> )}
  </>
  );

  
}

export default App;


// we need a header, a search bar, and a cake section