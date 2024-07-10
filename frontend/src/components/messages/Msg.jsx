import React from 'react'

const Msg = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img alt='Tailwind css chat bubbble component'
            />
        </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! waht's upp?</div>
        <div className='chat-footer opacity-50 test-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Msg
