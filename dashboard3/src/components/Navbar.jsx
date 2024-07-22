import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton = ({title, customFunc, icon, color, dotColor}) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor, cursor: 'pointer' }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  )
};

function Navbar() {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);


  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);

    }

    else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className = "flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

      <div className = "flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor = "#03c9d7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notifications" dotColor = "#03c9d7" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />

        <TooltipComponent content = "Profile" position = "BottomCenter">
          <div className = "flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick = {() => handleClick('userProfile')}>  
            <img src = {"https://placehold.co/20x20"} alt = "avatar" className = "w-8 h-8 rounded-full" />
            <span className = "text-sm font-medium text-gray-700 font-bold">Fernando</span>
            <MdKeyboardArrowDown className = "w-4 h-4 text-gray-700 font-bold" />

          </div>

        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}

        
      </div>
      
    </div>
  )
 

}

export default Navbar
