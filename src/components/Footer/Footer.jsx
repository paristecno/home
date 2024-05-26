import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-gray-50">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-12 items-center space-x-2">
          <span className="text-2xl font-bold">Paris<span className="text-blue-600">Tecno</span>.</span>
        </div>
        <div className="text-gray-500">Descubre en línea gadgets y dispositivos top. ¡Innovación, calidad y seguridad! Tecnología en cada clic. 🚀</div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
          <li className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
           <span className='ml-1'> Suipacha 655 esquina Dardo Rocha, Buenos Aires</span>
        </li>
          <li className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
           <span className='ml-1'>0800-555-4421</span>
        </li>
          <li className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
           <span className='ml-1'> Atención@paristecno.com.ar</span>
        </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Medios de pago</div>
        <div className='flex flex-row'>
    <ul>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className='w-14' alt="" /></li>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className='w-14' alt="Visa" /></li>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className='w-14' alt="Mastercard" /></li>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className='w-14' alt="American Express" /></li>
    </ul>
    <ul>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" className='w-14' alt="Diners" /></li>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" className='w-14' alt="Banelco" /></li>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" className='w-14' alt="Cabal" /></li>
    </ul>
</div>

      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Formas de envio</div>
        <div className='flex flex-row'>
    <ul>
        <li><img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/2682@2x.png" className='w-16' alt="" /></li>
    </ul>
</div>

      </div>
   
    </div>
    <img src="https://daewooherramientas.com.ar/wp-content/uploads/elementor/thumbs/DATAWEB-q3m1fjduajybt6s26mxaj0lu62e2ml1e7icn4iy0qc.jpg" className='mt-5 ml-4 mb-5' alt="" />
    <div className="bg-gray-200">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
        <div className="font-thin">© 2024 Paris Tecno | Todos los derechos resevados</div>
        <div className="text-medium font-thin">
          <h1>Hecho con ❤ por ParisTecno</h1>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer