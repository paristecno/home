import React, { useState, useEffect } from 'react';
import Nav from '../Home/NavBar/Nav';
import Mp from '../Mp/Mp';
import Carguita from './Carguita';

const Checkout = ({ price, name, image }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // Este efecto se ejecuta solo una vez al montar el componente
  const [showMp, setShowMp] = useState(false);
  const [carguita, setCarguita] = useState('')
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Verifica si todos los campos del formulario tienen valor
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setFormValid(isValid);
  }, [formData]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    // Verificar si el formulario es válido antes de realizar el pago
    if (formValid) {
      setCarguita(true);
      setTimeout(() => {
        setCarguita(false);
        setShowMp(true);
      }, 3000);
      // Aquí puedes enviar los datos a través de emailjs o cualquier otra forma de envío de correo electrónico
    } else {
      // Muestra un mensaje de error indicando que se deben completar todos los campos
      alert('Por favor completa todos los campos del formulario.');
    }
  };


  return (
    <div>
      <div className="font-sans bg-gray-100">
        {/* Aquí va tu contenido actual del Checkout */}
        {/* Agrega un botón para mostrar el componente Mp */}
        {!showMp && !carguita && (
            
            <div className="font-sans bg-gray-100">
             <Nav />
        <div className="flex max-sm:flex-col gap-4 h-full">
          <div className="bg-gradient-to-r from-slate-800 via-sky-700 to-sky-950 sm:h-screen sm:sticky sm:top-0 lg:min-w-[350px] sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="p-4 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="space-y-4">
      
                  <div className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 shrink-0 bg-gray-300 rounded-md">
                      <img src={image} className="w-full object-contain" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">{name}</h3>
                      <ul className="text-xs text-gray-300 space-y-1 mt-2">
                        <li className="flex flex-wrap gap-4">Cantidad <span className="ml-auto">1</span></li>
                        <li className="flex flex-wrap gap-4">Envío <span className="ml-auto">Gratis</span></li>
                        <li className="flex flex-wrap gap-4">Precio final <span className="ml-auto">${price.toLocaleString("es-AR")} <span className='text-xs'><del>${Math.round(price * 2).toLocaleString("es-AR")}</del></span></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="md:absolute md:left-0 md:bottom-0 bg-sky-700 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">${price.toLocaleString("es-AR")}</span></h4>
              </div>
            </div>
          </div>
      
          <div className="max-w-4xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
            <h2 className="text-xl font-bold text-gray-800">Completa tu pedido</h2>
            <form className="mt-8">
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-4">Datos personales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative flex items-center">
                    <input 
                     type="text"
                     name="nombre"
                     placeholder="Nombre completo"
                     value={formData.nombre}
                     onChange={handleInputChange}
                     className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" 
                     />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
      
                  <div className="relative flex items-center">
                    <input 
                    type="text" 
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
      
                  <div className="relative flex items-center">
                    <input 
                    type="number" 
                    name="dni"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
      
                  <div className="relative flex items-center">
                    <input 
                    type="email" 
                    name='email'
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 682.667 682.667">
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"></path>
                      </g>
                    </svg>
                  </div>
      
                  <div className="relative flex items-center">
                    <input 
                    type="number" 
                    placeholder="Número de teléfono"
                    name='telefono'
                    value={formData.telefono}
                    onChange={handleInputChange}
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                    <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                      <path
                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
      
              <div className="mt-8">
                <h3 className="text-base font-semibold text-gray-800 mb-4">Dirección de envío</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Dirección"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                  <input type="text" placeholder="Ciudad"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                  <input type="text" placeholder="Provincia"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                  <input type="text" placeholder="Codigo postal"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                </div>
      
                <div className="mt-5 grid gap-6">
        <div className="relative">
          <input className="peer hidden" id="radio_1" type="radio" name="radio"  />
          <span className=" absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-yellow-300 bg-yellow-100"></span>
          <label className="   flex cursor-pointer select-none rounded-lg border border-gray-400 p-4" htmlFor="radio_1">
            <img className="w-14 object-contain" src="https://yt3.googleusercontent.com/553_SSqbaWlrt_kmf0Bq2jql5eI-yyWoBu5Lc5xHSkOUvVbqq4SRSOkDe-3i8gjWD18fBHnY2A=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Correo Argentino</span>
              <p className="text-slate-500 text-sm leading-6">Envio: 2-4 Días</p>
            </div>
          </label>
        </div>
       
      </div>
      
                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button type="button" className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-gray-800 max-md:order-1">Cancel</button>
                                  <button
                  type="button"
                  disabled={!formValid} // Deshabilitar el botón si el formulario no es válido
                  onClick={handlePayment}
                  className={`rounded-md px-4 py-3 w-full text-sm font-semibold ${formValid ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700'}`}
                >
Pagar con Mercado Pago</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        )}
        {/* Mostrar el componente Mp si showMp es true */}
        {carguita && <Carguita/>}
        {showMp && <Mp formData={formData} name={name} price={price} />}
      </div>
    </div>
  );
};

export default Checkout