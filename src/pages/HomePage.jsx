import React, { useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'
import SideBar from '../components/SideBar'

const HomePage = () => {
  const [selectedUSer, setSelectedUser]=useState(false);
  return (
    <div className=' border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xl border-2 border-grey-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUSer ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
      <SideBar selectedUser={selectedUSer} setSelectedUser={setSelectedUser}/>
      <ChatContainer selectedUser={selectedUSer} setSelectedUser={setSelectedUser}/>
      <RightSideBar selectedUser={selectedUSer} setSelectedUser={setSelectedUser}/>
      </div>
    </div>
  )
}

export default HomePage