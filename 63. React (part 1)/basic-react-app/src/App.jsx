import './App.css'
import Title from "./Title";
import Productab from './ProductTab';

function Description(){
  return (
    <>
      <h3>I am the Description!</h3>
      <p> 2 x 2 = {2*2}</p>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <h1>This is a app coomponent</h1>
//       <p>Inside app component we have : </p>
//       <Title/>
//       <Description></Description>
//     </>
//   );
// }


function App() {
  return (
    <Productab></Productab>
  );
}
export default App;
