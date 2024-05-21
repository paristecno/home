import React, { useState } from 'react';

const Card = () => {
	const [mostrarDetalle, setmostrarDetalle] = useState(false);
	const [mostrarCheckout, setmostrarCheckout] = useState(false);
  
	return (
	  <div className="flex justify-center items-center h-screen">
		{!mostrarDetalle && !mostrarCheckout && (
		  <button onClick={() => setmostrarDetalle(true)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
			Landing
		  </button>
		)}
		{mostrarDetalle && !mostrarCheckout && (
		  <button onClick={() => setmostrarCheckout(true)} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
			Detalle
		  </button>
		)}
		{mostrarCheckout && (
		  <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
			Checkout
		  </button>
		)}
	  </div>
	);
  };
  

export default Card