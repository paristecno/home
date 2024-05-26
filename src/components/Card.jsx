import React, { useState } from 'react';
import Landing from './Home/Landing/Landing';
import Detalle from './Detail/Detalle';

const Card = () => {
	const [mostrarDetalle, setmostrarDetalle] = useState(false);
	const [mostrarCheckout, setmostrarCheckout] = useState(false);
	const [detalleInfo, setDetalleInfo] = useState({});

	const handleDetalleClick = (product) => {
        setDetalleInfo(product); // Al hacer clic en el botón, actualiza el estado con la información del detalle
        setmostrarDetalle(true); // También muestra el detalle
    };
  
	return (
	  <div className='md:hidden'>
		{!mostrarDetalle && !mostrarCheckout && (
			<Landing onDetalleClick={handleDetalleClick} mostrarDetalle={mostrarDetalle} setmostrarDetalle={setmostrarDetalle}/>
		
		)}
		{mostrarDetalle && !mostrarCheckout && (
		 <Detalle {...detalleInfo} />
		//   <button onClick={() => setmostrarCheckout(true)} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
		// 	Detalle
		//   </button>
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