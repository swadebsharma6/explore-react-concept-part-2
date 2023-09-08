import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('button clicked')
  }
  function handleClick2(){
    alert('Button 2 clicked')
  }

  const addToFive =(num) =>{
    alert(num + 5)
  }

return(
  <div>
   <h2>React core concept part-2</h2>
   <Users></Users>
   <Team></Team>
   <Counter></Counter>
   <button onClick={handleClick}>Click me</button>
   <button onClick={handleClick2}>Click me 2</button>
   <button onClick={()=>{alert('Third button is clicked')}}>Click third</button>
   <button onClick={()=>addToFive(3)}>Click 4</button>
  </div>
)
}

export default App
