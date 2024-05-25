import React, { useState } from 'react'
import Mp from './Mp'
import Carga from './Carga'

const Erro = () => {

    const estilo = {
        fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
      };

    const [loading, setLoading] = useState('');

    const [denuevo, setDenuevo] = useState(false)
    const mostarDenuevoHandler = () => {
        setLoading('true')
        setTimeout(() => {
            setLoading('false')
            setDenuevo(true)
        }, 3000);
    }

  return (
   <div style={estilo}>
  {!denuevo && !loading && (
       <div className="h-screen flex flex-col">
       {/* Parte superior (roja) */}
       <div className="bg-red-500 flex justify-center items-center h-1/2">
        <div className='absolute top-4 font-bold text-4xl text-gray-300  ml-[400px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</div>
         <div className="text-center">
           {/* Imagen centrada */}
           <img src="https://i.postimg.cc/rmWtw51t/removal-ai-c1562fe4-f428-4b5d-a15c-7585e1e795c2-screen.png" alt="Imagen" className="w-32 h-32 mx-auto mb-4" />
           {/* Párrafo */}
           <p className="text-white text-md mb-2">Algo salió mal...</p>
           {/* Título */}
           <h1 className="text-white text-xl">Hubo un error al procesar tu <br />pago</h1>
         </div>
       </div>
       {/* Parte inferior (blanca) */}
       <div className="bg-white flex justify-center items-center h-1/3">
         <div className="text-center">
           {/* Título */}
           <h1 className="text-2xl font-normal mb-2">¿Qué puedo hacer?</h1>
           {/* Párrafo */}
           <p className="text-lg mb-4 text-gray-600">Usa con otra tarjeta o medio de pago</p>
           {/* Botón */}
           <button  className="bg-[#009EE3] hover:bg-[#007de3e0] text-white font-bold py-3 px-4 rounded w-full mt-5" onClick={mostarDenuevoHandler}>Pagar con otro medio</button>
   
         </div>
       </div>
     </div>
  )}
  {loading && <Carga/>}
  {denuevo && <Mp/>}
   </div>
  )
}

export default Erro