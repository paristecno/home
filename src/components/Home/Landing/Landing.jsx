import React from 'react';
import Nav from '../NavBar/Nav';


const Landing =  ({onDetalleClick, mostrarDetalle, setmostrarDetalle }) => {
  const products = [
    {
      id: 1,
      discount: 50,
      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 2,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 3,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 4,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 5,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 6,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 7,
      discount: 50,

      name: 'Arabiana Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 8,
      discount: 50,

      name: 'Arabian Musk',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 1500.00,
      discountedPrice: 99.00,
      ratings: 4
    },
  ];

  const productsSale = [
    {
      id: 1,
      discount: 50,
      name: 'KANJI TV LED SMART 65" KJ-65ST005-2 4K SMART',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 358000.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 2,
      discount: 50,

      name: 'KANJI TV LED 32" MT005 KJ-MT32-30 HD HDMI USB TDA',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 168000.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 3,
      discount: 50,

      name: 'Smart Tv Kanji 40 Led Android Tv Kj-4xtl005',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 219000.00,
      discountedPrice: 99.00,
      ratings: 4
    },
    {
      id: 4,
      discount: 50,

      name: 'KANJI TV LED SMART 65" KJ-65ST005-2 4K ',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 412000.00,
      discountedPrice: 5.00,
      ratings: 4
    }
  ];
  

  return (
    <div className='mt-[-8px]'>
      <div className="mx-auto max-w-screen-xl border">
      <Nav/>
      <div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
  <div className="relative h-72 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg">
    {/* Imagen para dispositivos móviles */}
    <img className="h-full w-full object-cover block sm:hidden" src="https://i.ibb.co/RCMrH7Y/Compra-y-recibi-hoy-1.png" alt="Banner" />
        {/* Imagen para dispositivos de escritorio */}
        <img className="h-full w-full object-cover hidden sm:block" src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw7980b95a/marketing/home/home_pariscl/banner_recibehoy_18ene22.jpg" alt="Banner" />
    <div className="px-4 pt-8 pb-10">
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
        <img className="mx-auto h-auto w-full rounded-full" src="https://i.ibb.co/C9YGs9p/Dise-o-sin-t-tulo-3.png" alt="" />
      </div>
    </div> 
  </div>
</div>






        {/* Contenido de la sección de información general */}
        <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <span className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2 mr-2"
                alt=""
              />
              <h1 className="text-2xl font-bold text-gray-800">
                Paris Tecno | Kanji
              </h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2"
                alt=""
              />
            </span>
            <p className="mt-2 text-gray-600">Descubre las Ofertas más Increíbles en París Tecno. Tecnología de Vanguardia, Envío Gratuito en Todo el País. ¡Aprovecha Hoy!</p>
          </div>
          <div className="">
            <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>

<span className='ml-1'> Envio gratis a todo el país</span>
            </p>
            <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>


             <span className='ml-1'> Pago seguro con Mercado Pago</span>
            </p>
          </div>
        </div>
{/* Banner solo para dispositivos móviles */}
<div className="block sm:hidden">
        <img src="https://i.postimg.cc/Mpf6BPJL/baner-Celu.png" className="w-full mb-10" alt="Banner móvil" />
      </div>

      {/* Banner solo para dispositivos de PC */}
      <div className="hidden sm:block">
        <img src="https://i.postimg.cc/zvyMQQ7Z/bannerPC.png" className='mb-10' alt="Banner PC" />
      </div>

      <div className='items-center bg-slate-200  justify-center flex flex-col h-full'>
  <h1 className='text-3xl mt-5 font-bold text-red-500 text-center'>{"¡OFERTAS HOT SALE!"}</h1>
  <p className='text-xl text-gray-800 text-center'>{"¡Disfruta de toda la copa américa! Llevate tu SMART TV FULL HD 32\" en 3, 6, 12, 18 o 24 cuotas sin interés. 🎉⚽"}</p>
  <p className='text-lg text-gray-500 mb-5 text-center'>{"(Oferta válida hasta agotar stock 26/05/2024)"}</p>
</div>

<section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4  lg:gap-4">
      {productsSale.map((product) => (
        <article key={product.id} className="relative ">
          <div className="aspect-square overflow-hidden">
            <img
              className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
              src={product.image}
              alt={product.name}
            />
          </div>
          {product.sale && (
            <div className="absolute top-0 m-1 rounded-full bg-white">
              <p className="text-[10px] rounded-full bg-sky-500 p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                {product.discount}% de descuento
              </p>
            </div>
          )}
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  {product.name}
                  <span className="absolute" aria-hidden="true"></span>
              </h3>
              <div className="mt-2 flex flex-col">
               <p className='text-sm text-green-600 font-medium'>Envío gratis</p>
               <p className='text-sm text-green-600 '>Hasta 12 cuotas de ${Math.round(product.price / 12).toLocaleString("es-AR")}</p>
              </div>
            </div>
            <div className="text-right">
              {product.sale && (
                <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                  ${Math.round(product.price * 100 / product.discount).toLocaleString("es-AR")}
                </del>
              )}
              <p className="text-lg font-medium sm:text-sm md:text-lg">
                ${product.price.toLocaleString("es-AR")}
              </p>
            </div>
          </div>
          <button
          onClick={() => onDetalleClick(product)}
          className="w-full text-center flex items-center text-white mt-2 justify-center gap-1 rounded border border-slate-300 bg-green-500 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
>
  VER MÁS
</button>
        </article>
      ))}
    </div>
  </div>
</section>

<div className='items-center bg-slate-200  justify-center flex flex-col h-full'>
  <h1 className='text-3xl mt-5 font-bold text-red-500 text-center'>{"↓ Más productos ↓"}</h1>
  <p className='text-xl mb-5 text-gray-800 text-center'>{"¡Explora lo último en tecnología! 🔍 Con Mercado Pago compra seguro, envío gratis a toda la Argentina. ✨🚚"}</p>
</div>



        {/* Contenido de los productos */}
        <main className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
          {products.map(product => (
            <article key={product.id} className="relative">
              <div className="aspect-square overflow-hidden">
                <img className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={product.image} alt={product.name} />
              </div>
              {product.sale && (
                <div className="absolute top-0 m-1 rounded-full bg-white">
                  <p className="rounded-full bg-sky-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">{product.discount}% de descuento</p>
                </div>
              )}
              <div className="mt-4 flex items-start justify-between">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      {product.name}
                      <span className="absolute" aria-hidden="true"></span>
                  </h3>
                  <div className="mt-2 flex flex-col">
               <p className='text-sm text-green-600 font-medium'>Envío gratis</p>
               <p className='text-sm text-green-600 '>Hasta 12 cuotas de ${Math.round(product.price / 12).toLocaleString("es-AR")}</p>
              </div>
                </div>
                <div className="text-right">
                  <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">$ {Math.round(product.price * 100 / product.discount).toLocaleString("es-AR")} </del>
                  <p className="text-lg font-medium  ">$ {product.price.toLocaleString("es-AR")} </p>
                </div>
              </div>
              <button
               onClick={() => onDetalleClick(product)}
  className="w-full text-center flex items-center text-white mt-2 justify-center gap-1 rounded border border-slate-300 bg-green-500 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
>
  VER MÁS
</button>


            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Landing;
