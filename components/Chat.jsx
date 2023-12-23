'use client'

import { chatResponse } from '@/utils/action'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const Chat = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  const { mutate } = useMutation({
    mutationFn: (messages) => chatResponse(messages),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(text)
  }
  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <div className='w-full'>
        <form onSubmit={handleSubmit} className='max-w-4xl mx-auto pt-12'>
          <div className='join w-full'>
            <input
              type='text'
              name=''
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
              placeholder='Ask me anything'
              className='input input-bordered join-item w-full'
            />
            <button className='btn btn-primary join-item' type='submit'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
