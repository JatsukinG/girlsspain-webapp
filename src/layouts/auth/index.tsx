import type { FC, PropsWithChildren } from 'react'


const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="relative flex flex-col min-h-screen bg-gradient-to-bl from-neutral-900 to-neutral-800">
        <div className="m-auto">
          {children}
        </div>
      </div>
  )
}

export default AuthLayout