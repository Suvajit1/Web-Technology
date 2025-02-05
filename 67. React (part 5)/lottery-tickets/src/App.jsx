import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {
  // let winCondition = (ticket)=>{
  //   return sum(ticket) === 20;
  // }

  let winCondition = (ticket)=>{
    return ticket.every((num)=> num === ticket[0]);
  }

  return (
    <>
      {/* <p>Lottery</p> */}
      {/* <Ticket ticket={[2,5,8]}></Ticket>
      <Ticket ticket={[2,4,7,0,5]}></Ticket> */}
      <Lottery n={3} winCondition={winCondition}></Lottery>
    </>
  )
}

export default App
