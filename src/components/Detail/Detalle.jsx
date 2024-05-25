import React, { useState, useEffect } from 'react';
import Checkout from '../Checkout/Checkout';
import Nav from '../Home/NavBar/Nav';
import Cargaso from './Cargaso';

const Detalle = ({ price, name, image, discount }) => {
  const [carga, setCarga] = useState('')
  const [mostrarCheckout, setMostrarCheckout] = useState(false); // Estado para controlar la visibilidad del Checkout

  // Función para mostrar el Checkout al hacer clic en el botón
  const mostrarCheckoutHandler = () => {
    setCarga(true)
    setTimeout(() => {
      setCarga(false)
      setMostrarCheckout(true);
    }, 3000);
  };

  // <button className='bg-red-500 rounded-md text-4xl p-4 text-white' onClick={mostrarCheckoutHandler}>Mostrar Checkout</button>
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <div className="mx-auto max-w-screen-xl border">
      {/* Renderiza el contenido solo si mostrarCheckout es false */}
      {!mostrarCheckout && !carga && (
        <div>
         <Nav/>
         <section className="py-12 sm:py-16 mt-[-20px]"> 
  <div className="container mx-auto px-4">
  <nav className="flex">
      <ol className="flex items-center">
        <li className="text-left text-xs text-gray-500 mb-2">
          <div className="-m-1">
            Nuevo |  +600 vendidos
          </div>
        </li>

       

       
      </ol>
    </nav>
    <nav className="hidden md:flex">
      <ol role="list" className="flex items-center ">
        <li className="text-left ">
          <div className="-m-1 text-[#3483fa] font-semibold">
            Home 
          </div>
        </li>

     

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">{">"}</span>
            <div className="-m-1 text-[#3483fa] font-semibold">
            {name} 
            </div>
          </div>
        </li>
      </ol>
    </nav>
    <nav className="flex md:hidden">
      <ol  className="flex items-center justify-between">
        <li className="text-left text-lg ">
          <div className="-m-1">
           {name}
          </div>
        </li>
      </ol>
    </nav>

    <div className="mt-2 ml-[-5px] flex items-center md:hidden">
          <div className="flex items-center">
          <p className="mr-2 text-sm font-medium text-gray-500 ">{"4.8"}</p>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">{"(513)"}</p>
        </div>

        {/* <div className="mt-2 ml-[-5px] flex items-center md:hidden">
                  <p className="rounded-full bg-sky-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">30% de descuento</p>
        </div> */}

    <div className="lg:col-gap-12	 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img className="h-full w-full max-w-full object-cover" src={image} alt="hola" />
            </div>
          </div>

          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                <img className="h-full w-full object-cover" src={image} alt="" />
              </button>
             
          
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 ">
        <h1 className="hidden text-2xl md:flex font-bold text-gray-900">{name}</h1>

        <div className="hidden mt-5 md:flex items-center">
          <div className="flex items-center">
          <p className="mr-2 text-sm font-medium text-gray-500 ">{"4.8"}</p>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
            <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">{"(513)"}</p>
        </div>

        <h2 className="hidden md:flex mt-8 text-3xl text-gray-900">${price.toLocaleString("es-AR")} <span className='text-sm ml-2'>$<del>{Math.round(price*2).toLocaleString("es-AR")}</del></span></h2>
        <div className='md:hidden'>
        <h2 className="md:hidden  text-3xl mt-[-22px] text-gray-900">${price.toLocaleString('es-AR')} <span className='text-sm'>$<del>{Math.round(price*100 / discount).toLocaleString("es-AR")}</del></span></h2>
        <p className='text-lg text-green-700'>Hasta 12 cuotas sin interés de ${Math.round(price / 12).toLocaleString("es-AR")}</p>
        </div>
        <div className="flex mt-3 md:hidden select-none flex-wrap items-center gap-1">
   <p className='text-lg'><span className='text-green-700 font-semibold'>
    Envio gratis</span> a todo el país</p>
   <p>¡Correo Argentino lo hace posible!</p>
        </div>

        <div className='hidden md:flex'>
        <p className='text-lg text-green-700'>Hasta 6 cuotas sin interés de ${Math.round(price / 6).toLocaleString("es-AR")}</p>
        </div>

        <div className="hidden mt-3 md:flex select-none flex-wrap items-center gap-1"> 
   <div className="flex mt-3 flex-col select-none flex-wrap items-center gap-1">
   <p className='text-md'><span className='text-green-500 font-semibold'>
    Envio gratis</span> a todo el país.</p>
   <p className='text-xs text-gray-600'>A la puerta de tu casa en solo 24HS</p>
   
  </div>
  
        </div>

       <div className='hidden md:flex'>
        <h1 className='font-medium text-xl mt-5'>¡Última disponible!</h1>
       </div>

      
        <div className="mt-5  flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <button onClick={mostrarCheckoutHandler} type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-500 bg-none px-28 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-600">
          
           Comprar ahora
          </button>
        </div>

        <ul className="mt-8 space-y-2">
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

           <span className='ml-1 text-blue-500'>Devolución gratis. <span className='text-gray-600'>30 días desde que lo recibís.</span></span>
          </li>

          <li className="flex items-center text-left text-sm font-medium text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

<span className='ml-1'>Compra protegida con <span className='text-blue-500'>Mercado Pago.</span></span>
          </li>
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>


<span className='ml-1'>12 meses de garantía de fábrica.</span>
          </li>
        </ul>
        <ul className="mt-8 space-y-2">
          <li>
          <h1 
  className=" rounded-md border-2 w-[350px] border-transparent bg-green-600 bg-none flex text-left text-sm font-medium text-white "
>
<div className='flex mt-1 mb-1 ml-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

 <span >¡Pagá hasta 12 cuotas sin interés!</span>
</div>
</h1>
          </li>
          <li className="flex items-center text-left text-lg font-bold text-gray-600">
           <span className='ml-1'>Medios de pago</span>
          </li>
          <li className="flex items-center text-left text-lg font-medium text-gray-600">
           <span className='ml-1'>Tarjetas de crédito</span>
          </li>
          <li className='flex'>
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/b4785730-c13f-11ee-b4b3-bb9a23b70639-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/ca059a50-0f95-11ea-bc46-0785c501feb7-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="" />
          </li>
          <li className="flex items-center text-left text-lg font-medium text-gray-600">
           <span className='ml-1'>Tarjetas de débito</span>
          </li>
          <li className='flex mt-10'>
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="" />
          <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" alt="" />
          </li>
      
        </ul>
      </div>

      <div className="lg:col-span-3">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>
          </nav>
        </div>

        <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      )}
      {carga && <Cargaso/>}
      {mostrarCheckout && <Checkout price={price} name={name} image={image}/>}
    </div>
  );
};

export default Detalle;
