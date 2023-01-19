const Navbar = () => {
  return (
    <>
      <header class="text-[#D2AC47] body-font bg-gray-900">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="flex bg-white p-2 rounded-lg">
              <img className="w-12 h-12 " src="./images/webp/logo.png" alt="logo" />
              <img className="w-32 h-12" src="./images/webp/logo-text.png" alt="logo" />
            </div>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-gray-300 cursor-pointer font-medium tracking-widest uppercase text-lg">Shop</a>
            <a href="/" class="mr-5 hover:text-gray-300 cursor-pointer font-medium tracking-widest uppercase text-lg">Home</a>
            <a href="/" class="mr-5 hover:text-gray-300 cursor-pointer font-medium tracking-widest uppercase text-lg">About</a>
            <a href="/" class="mr-5 hover:text-gray-300 cursor-pointer font-medium tracking-widest uppercase text-lg">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
