import type { FC, PropsWithChildren } from 'react'
import Navbar from './Navbar.tsx'


const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="relative">
        <Navbar/>
        <main className="mt-20">
          {children}
        </main>
      </div>
  )
}

export default MainLayout