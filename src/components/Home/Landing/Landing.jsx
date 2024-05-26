import React from 'react';
import Nav from '../NavBar/Nav';
import Footer from '../../Footer/Footer';


const Landing =  ({onDetalleClick, mostrarDetalle, setmostrarDetalle }) => {
  const products = [
    {
      id: 1,
      discount: 30,
      name: 'Heladera con freezer Gafa HGF388AFP',
      image: 'https://electroluxar.vtexassets.com/arquivos/ids/162265-1200-1200?v=637950624089400000&width=1200&height=1200&aspect=true',
      sale: true,
      price: 690000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        uno: ["Refrigerador (litros) - Capacidad Bruta/Neta", 254],
        dos: ["Congelador (litros) - Capacidad bruta/neta", 120],
        tres: ["Total (litros) - Capacidad Bruta/Neta", 374],
        cuatro: ["Ancho (desempaquetado)","61,4 cm"],
        cinco: ["Altura (sin embalaje)", "180,0 cm"],
        seis: ["Profundidad (sin empaquetar)","62,1 cm"],
        siete: ["Peso (sin embalaje)", "53 kg"]
      } 
    },
    {
      id: 2,
      discount: 30,

      name: 'USMAN COCINA IRINA ACERO 550 Horno',
      image: 'https://76338a6a.flyingcdn.com/15851-thickbox_default/usman-cocina-irina-acero-550-rf-horno-visor-cod2220.jpg',
      sale: true,
      price: 330000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        uno: ["Cantidad de hornallas", 4],
        dos: ["COCINA USMAN ® MODELO", "IRINA CLASSIC550"],
        tres: ["Puerta de horno visor con vidrio templado", "Si"],
        cuatro: ["Alto rendimiento para amantes de la cocina y espacios reducidos", "Si"],
        cinco: ["Estructura elegante y funcional", "Si"],
        seis: ["Perillas metálicas", "Si"],
        siete: ["Piel de acero inoxidable", "Si"]
      }
    },
    {
      id: 3,
      discount: 50,

      name: 'WHIRLPOOL LAVARROPAS WNQ-80AB FRONTAL 8KG',
      image: 'https://76338a6a.flyingcdn.com/47151-thickbox_default/whirlpool-lavarropas-wnq-80ab-frontal-8kg-blanco.jpg',
      sale: true,
      price: 490000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Carga", "Frontal"],
        "dos": ["Inverter", "Si"],
        "tres": ["Marca", "Whirlpool"],
        "cuatro": ["Origen", "Industria Argentina"],
        "cinco": ["Eficiencia Energética", "A++"],
        "seis": ["Color", "Blanco"],
        "siete": ["Capacidad", "8 Kg"]
      }
    },
    {
      id: 4,
      discount: 50,

      name: 'PHILCO MICROONDAS MPG8428N 28LTS. DIGITAL C/GRILL',
      image: 'https://76338a6a.flyingcdn.com/38688-thickbox_default/philco-microondas-mpg8428n-28lts-digital-cgrill.jpg',
      sale: true,
      price: 210000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["MODELO", "MPG8828N"],
        "dos": ["COLOR", "BLANCO CON GRIS"],
        "tres": ["CAPACIDAD", "28 LITROS"],
        "cuatro": ["POTENCIA MICROONDAS", "900 WATTS"],
        "cinco": ["POTENCIA GRILL", "1150 WATTS"],
        "seis": ["CONTROL", "DIGITAL"],
        "siete": ["GARANTIA", "1 AÑO"]
      }
      
    },
    {
      id: 5,
      discount: 50,

      name: 'DAEWOO ESTUFA GARRAFERA DANY-113 INFRARROJA',
      image: 'https://76338a6a.flyingcdn.com/31489-thickbox_default/daewoo-estufa-garrafera-dany-113-infrarroja.jpg',
      sale: true,
      price: 140000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Alimentación", "Gas licuado"],
        "dos": ["Consumo de gas (quemador)", "1900 – 3800 kcal/h"],
        "tres": ["Presión de gas", "280 mm C.A."],
        "cuatro": ["Condiciones ambientales", "-10/+45 °C"],
        "cinco": ["Materiales", "Chapa, placas cerámicas, perillas y ruedas plásticas"],
        "seis": ["Peso", "10.5 kg"],
        "siete": ["Incluye", "Válvula de seguridad y analizador atmosférico"]
      }
    },
    {
      id: 6,
      discount: 50,

      name: 'ESKABE CALEFACTOR 3000 KCAL M3 TB3 P GRIS GN',
      image: 'https://76338a6a.flyingcdn.com/46827-thickbox_default/eskabe-calefactor-3000-kcal-m3-tb3-p-gris-gn.jpg',
      sale: true,
      price: 180000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Modelo", "M3 MX3"],
        "dos": ["Potencia [kcal/h]", 3000],
        "tres": ["Calefacciona superficie hasta aprox. (m2)*", 33],
        "cuatro": ["Multigás", "Si"],
        "cinco": ["Color", "Grafito"],
        "seis": ["Encendido piezoeléctrico", "Si"],
        "siete": ["Garantía", "5 Años"]
      }
    },
    {
      id: 7,
      discount: 50,

      name: 'CHROMECAST 4 GOOGLE HD GENERACION',
      image: 'https://76338a6a.flyingcdn.com/46229-thickbox_default/chromecast-4-google-hd-generacion.jpg',
      sale: true,
      price: 72000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Nombre", "Chromecast 4 Google HD Generación"],
        "dos": ["Resolución", "HD"],
        "tres": ["Generación", "4"],
        "cuatro": ["Fabricante", "Google"],
        "cinco": ["Conectividad", "WiFi"],
        "seis": ["Compatibilidad", "Dispositivos con capacidad de transmitir"],
        "siete": ["Funciones destacadas", "Transmisión de contenido multimedia a través de dispositivos compatibles"]
      }
    },
    {
      id: 8,
      discount: 50,

      name: 'ROKU EXPRESS TRANSMISOR SMART 3930MX',
      image: 'https://76338a6a.flyingcdn.com/23003-thickbox_default/roku-express-transmisor-smart-3930mx-499025399.jpg',
      sale: true,
      price: 93000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Nombre", "Roku Express Transmisor Smart 3930MX"],
        "dos": ["Tipo", "Transmisor Smart"],
        "tres": ["Modelo", "3930MX"],
        "cuatro": ["Resolución máxima", "1080p"],
        "cinco": ["Conectividad", "WiFi"],
        "seis": ["Aplicaciones compatibles", "Variadas aplicaciones de streaming"],
        "siete": ["Funciones destacadas", "Transmisión de contenido multimedia en alta definición"]
      }
      
   
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
      ratings: 4,
      description: {
        "uno": ["Tipo de TV", "LED Smart"],
        "dos": ["Tamaño de pantalla", "65\""],
        "tres": ["Modelo", "KJ-65ST005-2"],
        "cuatro": ["Resolución", "4K"],
        "cinco": ["Conectividad", "Smart"],
        "seis": ["Tecnología de imagen", "LED"],
        "siete": ["Medidas", "Ancho: 145.5 cm x Alto: 83.5 cm x Profundidad: 9.8 cm"]
      }
      
    },
    {
      id: 2,
      discount: 40,

      name: 'KANJI TV LED 32" MT005 KJ-MT32-30 HD HDMI USB TDA',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 168000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Tipo de TV", "LED"],
        "dos": ["Tamaño de pantalla", "32\""],
        "tres": ["Modelo", "KJ-MT32-30"],
        "cuatro": ["Resolución", "HD"],
        "cinco": ["Conectividad", "HDMI", "USB", "TDA"],
        "seis": ["Medidas", "Ancho: 73.2 cm x Alto: 43.5 cm x Profundidad: (profundidad del televisor en cm)"]
      }
    },
    {
      id: 3,
      discount: 50,

      name: 'Smart Tv Kanji 40 Led Android Tv Kj-4xtl005',
      image: 'https://kanji.com.ar/wp-content/uploads/2024/02/tv-32-06.jpg',
      sale: true,
      price: 219000.00,
      discountedPrice: 99.00,
      ratings: 4,
      description: {
        "uno": ["Marca", "Kanji"],
        "dos": ["Tamaño de pantalla", "40\""],
        "tres": ["Tipo de pantalla", "LED"],
        "cuatro": ["Sistema operativo", "Android TV"],
        "cinco": ["Modelo", "KJ-4XTL005"],
        "seis": ["Resolución", "1080p"],
        "siete": ["Conectividad", "WiFi, HDMI, USB"]
      }
      
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
      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
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
                  ${Math.round((product.discount * product.price / 100) + product.price).toLocaleString("es-AR")}
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
                  <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">$ {Math.round((product.discount * product.price / 100) + product.price).toLocaleString("es-AR")} </del>
                  <p className="text-lg font-medium  ">${product.price.toLocaleString("es-AR")} </p>
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
      <Footer/>
    </div>
  );
}

export default Landing;
