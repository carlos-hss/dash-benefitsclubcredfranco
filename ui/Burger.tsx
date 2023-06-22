import React from 'react';

export default function Burger({ onClick, isOpen }: BurgerProps) {
  return (
    <div
      onClick={onClick}
      className={`block lg:hidden fixed top-2 ${
        isOpen ? 'left-[14rem]' : 'left-4'
      } space-y-2 cursor-pointer transition-all duration-200 ease-in-out z-30`}
    >
      <button type="button" title="button" className="relative group">
        <div className="flex flex-col justify-between w-[25px] h-[20px] transform transition-all duration-150 origin-center overflow-hidden">
          <div
            className={`bg-gray2 h-[2px] w-7 transform transition-all duration-150 origin-left ${
              isOpen ? 'rotate-[42deg]' : 'rotate-0'
            }`}
          />
          <div
            className={`bg-gray2 h-[2px] w-3/4 rounded transform transition-all duration-150 ${
              isOpen ? '-translate-x-10' : 'translate-x-0'
            }`}
          />
          <div
            className={`bg-gray2 h-[2px] ${
              isOpen ? 'w-7' : 'w-1/2'
            } transform transition-all duration-150 origin-left ${
              isOpen ? '-rotate-[42deg]' : 'rotate-0'
            }`}
          />
        </div>
      </button>
    </div>
  );
}
