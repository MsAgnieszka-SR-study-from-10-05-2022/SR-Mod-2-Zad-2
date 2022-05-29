import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const uuid = uuidv4();

function Uuid() {
	return (
		<div className='uuid-parent'>
			<p className='gray-paragraph'>Your Version 4 UUID:</p>
			<p className='uuid-paragraph'>{uuid}</p>
			<p className='refresh-paragraph'>To get the new one UUID please refresh this page.</p>
		</div>
	);
}

function App() {
	return (
		<div className='App'>
			<Uuid />
		</div>
	);
}

export default App;
