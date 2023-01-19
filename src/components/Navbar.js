const Navbar = () => {
  return (
    <>
      <header class="text-[#D2AC47] bg-[FFFFF4] border-b-[#D2AC47]">
        <div class="container mx-auto flex flex-wrap p-3 lg:px-6 flex-col md:flex-row items-center">
          <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="flex bg-white p-2 rounded-lg">
              <img className="w-12 h-12 " src="./images/logo/logo.png" alt="logo" />
              <img className="w-32 h-12" src="./images/logo/logo-text.png" alt="logo" />
            </div>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-[#F1E5AC ] hover:border-b-2 border-[#D2AC47] cursor-pointer font-bold font-medium tracking-widest uppercase text-lg">Home</a>
            <a href="/" class="mr-5 hover:text-[#F1E5AC ] hover:border-b-2 border-[#D2AC47] cursor-pointer font-bold font-medium tracking-widest uppercase text-lg">Shop</a>
            <a href="/" class="mr-5 hover:text-[#F1E5AC ] hover:border-b-2 border-[#D2AC47] cursor-pointer font-bold font-medium tracking-widest uppercase text-lg">About</a>
            <a href="/" class="mr-5 hover:text-[#F1E5AC ] hover:border-b-2 border-[#D2AC47] cursor-pointer font-bold font-medium tracking-widest uppercase text-lg">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
