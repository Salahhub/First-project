import Squart from "./Squart";
import Input from "./Input";
import {useState}from "react";
function App() {
const [colorvalue,setcolorvalue]=useState('');
const [hexvalue,sethexvalue]=useState('');
const [isdarktext,setisdarktext]=useState(true);
  return (
    <div className="App">
      
      <Squart
         colorvalue={colorvalue}
         hexvalue={hexvalue}
         isdarktext={isdarktext}
      />
      <Input
         colorvalue={colorvalue}
         setcolorvalue={setcolorvalue}
         sethexvalue={sethexvalue}
         isdarktext={isdarktext}
         setisdarktext={setisdarktext}
       />
    </div>
  );
}

export default App;
