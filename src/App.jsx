import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
    </div>
  );
}

export default App;
