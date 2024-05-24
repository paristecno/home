import React from 'react'

const Navas = () => {
    const estilo = {
        fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
        // Otros estilos que desees aplicar
      };
  return (
    <div style={estilo} className='mt-[-1px]'>
      <nav className="bg-sky-400">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-1">
          {/* Texto "Hola" al inicio */}
          <a href='https://www.mercadopago.com.ar/' className="text-white "><img className='w-16' src="https://i.postimg.cc/9M5grGgV/baner1-1-removebg-preview.png" alt="" /></a>
       
          <p className="text-white text-xs mr-2 hover:underline">Ayuda</p>
        </div>
      </nav>
    </div>
  )
}

export default Navas