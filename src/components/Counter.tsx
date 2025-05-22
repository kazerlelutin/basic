
import { useCounter } from "./counter.ctrl";

export function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
