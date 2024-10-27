import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const { search, blocks } = useBlockSearch();
  return (
    <div className="App">
      <header className="App-header">
        Blockchain
      </header>

      <div>
        {blocks.map((blocks) =>(
          <Blocks key = {blocks.data} {...blocks}></Blocks>
        ))}
      </div>
    </div>
  );
}


// Dumb UI component
function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
}
//composant block qui va s'afficher 
function Blocks({data,previoushash, hash}){
  return(
    
    
      <div className="card">

      <strong>{data}</strong> {hash} {previoushash}

      </div>
    
  )
}

function useBlockSearch(){
  const [blocks, setBlocksSearch] = useState([]);
  useEffect(()=> {
    search();
  },[]);

  const search = async(q) =>{

    let response;
    try{
      
      response = await fetch(
      'http://localhost:8083/'
    );}
    catch(e){
      
      console.log(e);
      response = {};
    };//On va chercher les blocks de la blockchain dans le serveur blockchain.
    const data = await response.json();
    console.log(data);
    setBlocksSearch(data);

  };

  return {search,blocks};
}
export default App;
