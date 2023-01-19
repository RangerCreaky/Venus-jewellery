
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {
    return(
        
        <footer class="text-gray-800 body-font bg-[#FFFF4] border-4 border-t-[#D2AC47]">

            {/* Logo and contact */}
            <div class=" container px-[20px] py-[50px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col sm:flex-nowrap flex-wrap flex-col">

                {/* Logo */}
                <div class="rounded-lg shadow-2xl w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                        <div className="flex bg-white p-2 rounded-lg">
                            <img className=" w-92 h-92 " src="./images/webp/logo.webp" alt="logo" />

                        </div>
                    </a>
                </div>

                {/* Contact and social media */}
                <div class="flex flex flex mt-[20px] md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:flex-nowrap flex-wrap ">
                    <div class=" px-4">
                        <nav class="list-none mb-10">
                            <li class="border-b-2 border-[#D2AC47] mb-4">
                                <a class="font-black text-[#D2AC47]  cursor-pointer text-[22px]"> Hanamkonda </a>
                            </li>
                            <li>
                                <a  class="text-[##242846]  cursor-pointer"><span class="font-semibold text-[##242846]">Address</span> : Bus Stand Road, Chowrastha, Kakaji Nagar Colony, Hanamkonda Warangal Dist, Telangana.</a>
                            </li>
                            <li>
                                <a class="text-[##242846] cursor-pointer"><span class="font-semibold text-[##242846]">Phone no</span>  : 0870 - 2578 695 , 0870 - 2555 508</a>
                            </li>
                            <li>
                                <a class="text-[##242846] cursor-pointer"><span class="font-semibold text-[##242846]">Email</span> : venusjewellers1987@gmail.com </a>
                            </li>
                        </nav>
                    </div>
                    <div class=" px-4">
                        <nav class="list-none mb-10">
                            <li class="border-b-2 border-[#D2AC47] mb-4">
                                <a class="font-black text-[#D2AC47]  cursor-pointer text-[22px]"> Hyderabad </a>
                            </li>
                            <li>
                                <a class="text-[##242846]  cursor-pointer"><span class="font-semibold text-[##242846]">Address</span> : Door No 1-8-52/2 & 3, Sri Rama Complex, Chikadpally Main Road, Chikkadpally, Hyderabad - 500020</a>
                            </li>
                            <li>
                                <a class="text-[##242846] cursor-pointer"><span class="font-semibold text-[##242846]">Phone no</span>  : 040-27665242</a>
                            </li>
                            <li>
                                <a class="text-[##242846] cursor-pointer"><span class="font-semibold text-[##242846]">Email</span> : venusjewellers1987@gmail.com</a>
                            </li>
                        </nav>
                    </div>

                    {/* Social media */}
                    <div class=" px-4">
                        <nav class="list-none mb-10 ml-12 ">
                            <div class="flex flex-col ">
                                <li class="mt-0 flex">
                                    <a href="https://www.facebook.com/venusjewellerswarangal/" class="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><ImFacebook2 /> </a>                          
                                </li>
                                <li class="mt-4">
                                    <a href="https://www.instagram.com/_venus_jewellers_/" class="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><BsInstagram /></a>                            
                                </li>
                                <li class="mt-4">
                                    <a href="https://twitter.com/venus_jewellers" class="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaTwitterSquare /></a>                            
                                </li>
                                <li class="mt-4">
                                    <a href="https://in.pinterest.com/venusdigitalteam/" class="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaPinterestSquare /></a>                            
                                </li>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 The Venus Jewellers. All Copyrights Reserved
                    </p>
                    {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span> */}
                </div>
            </div>

        </footer>
    );
}

export default Footer;



