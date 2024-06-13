import React from 'react';
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className="bg-[#0b1e3d] text-white">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-white">
                        <span className="text-[#ffffff]">sarafa</span>
                        <span className="text-[#d4a259]">bazar</span>
                        <i className="fas fa-ring text-[#d4a259]"></i>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Wholesale Jewellery Sellers and Products"
                            className="pl-10 pr-4 py-2 rounded-full bg-[#f1f1f1] text-[#a1a1a1] w-96"
                        />
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a1a1a1]"></i>
                    </div>
                </div>
                <div className="flex space-x-4 text-[#d4a259]">
                    <a href="#" className="hover:underline">
                        Buyer's Account
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:underline">
                        Seller's Account
                    </a>
                </div>
            </div>
            <div className="flex justify-center space-x-8 py-2 text-[#ffffff]">
                <a href="#" className="hover:underline">
                    Gold <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Diamond <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Plain/CZ Casting <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Turkish/Italian <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Antique/Kundan <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Stone <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Platinum <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Silver <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Findings <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    Gemstones <i className="fas fa-caret-down"></i>
                </a>
                <a href="#" className="hover:underline">
                    More <i className="fas fa-caret-down"></i>
                </a>
            </div>
            <div className="flex justify-center py-4 text-[#ffffff]">
                <span>Sellers</span>
            </div>
        </div>
    );
};

export default Navbar;
