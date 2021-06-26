import './App.css';
import {useSelector , useDispatch} from "react-redux";
import {increment,decrement} from "./actions/index"


function App() {
  const inputValue = useSelector(state=> state.upDownValues);
 
  const dispatch= useDispatch();
  return (
    <div className="App">
  
       <header className="App-header">
       <h1>React with Redux</h1>
       <h2>Increment/Decrement Value</h2>
        <div className="APP__Values">
        <a className="APP__BUTTON" onClick={()=>{dispatch(decrement())}}>-</a>
       <input value={inputValue} className="APP__INPUT" />
       <a className="APP__BUTTON" onClick={()=>{dispatch(increment(5))}}>+</a>
       </div>
       
      </header> 
    </div>
  );
}

export default App;
