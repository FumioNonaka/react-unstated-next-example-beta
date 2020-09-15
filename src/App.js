import React, { createContext } from 'react';
import { useCounter } from './useCounter';
import CounterDisplay from './CounterDisplay';
import './App.css';

const initialCount = 0;
export const CounterContext = createContext(initialCount);
function App() {
	const counter = useCounter();
	return (
		<CounterContext.Provider value={ counter }>
			<div className="App">
				<CounterDisplay />
			</div>
		</CounterContext.Provider>
	);
}

export default App;
