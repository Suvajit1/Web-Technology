import './App.css'
import ProductTab from './ProductTab';
import MsgBox from './MsgBox';
function App() {
  return (
    // <>
    //   <ProductTab></ProductTab>
    // </>
    <>
      <MsgBox userName="Suvajit" textColor="pink"></MsgBox>
      <MsgBox userName="Swagata" textColor="red"></MsgBox>
      <ProductTab></ProductTab>
    </>
  )
}

export default App;
