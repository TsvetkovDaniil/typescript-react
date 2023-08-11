import React from 'react'

interface ModalProps {
  name: string
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, name, onClose }: ModalProps) => {
  const closeHandler = () => {
    onClose()
  }

  return (
    <>
      <div
        className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'
        onClick={closeHandler}
      />
      <div className='fixed w-[500px] p-4 rounded bg-white top-10 left-1/2 -translate-x-1/2'>
        <h1 className='font-bold text-lg'>{name}</h1>
        {children}
        <button
          className='py-2 px-4 border bg-red-400 font-bold hover:text-white'
          onClick={closeHandler}
        >
          Close
        </button>
      </div>
    </>
  )
}

export default Modal
