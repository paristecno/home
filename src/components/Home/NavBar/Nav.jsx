import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="bg-sky-400">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Texto "Hola" al inicio */}
          <a href="/home">

          <p className="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</p>
          </a>
          {/* Imagen en el medio */}
          <a href="/home"><div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_Paris_Cencosud.png" className="h-14" alt="Flowbite Logo" />
          </div></a>
          {/* Texto "Bye" al final */}
          <p className="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
