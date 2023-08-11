import { createContext, useState } from 'react'

interface IModalContext {
  isShown: boolean
  open: () => void
  close: () => void
}

export const ModalContext = createContext<IModalContext>({
  isShown: false,
  open: () => {},
  close: () => {},
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [isShown, setIsShown] = useState(false)
  const open = () => setIsShown(true)
  const close = () => setIsShown(false)

  return (
    <ModalContext.Provider value={{ isShown, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
