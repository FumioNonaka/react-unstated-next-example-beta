import React, {useContext} from "react";
import { CounterContext } from './App';

function CounterDisplay() {
	const counter = useContext(CounterContext);
	return (
		<div>
			<button onClick={counter.decrement}>-</button>
			<span>{counter.count}</span>
			<button onClick={counter.increment}>+</button>
		</div>
	);
}
export default CounterDisplay;
