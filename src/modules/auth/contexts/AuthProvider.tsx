import type { FC, PropsWithChildren } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import AuthContext from '@auth/contexts/AuthContext.tsx'
import authTokenState from '@auth/atoms/authTokenState.ts'
import informationMeState from '@auth/atoms/informationMeState.ts'


const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState)
  const [me, setMe] = useRecoilState(informationMeState)
  const resetAuthToken = useResetRecoilState(authTokenState)
  const isAuthenticated = authToken !== undefined

  const login = (tokenAuth) => {
    setAuthToken(() => tokenAuth)
  }

  const informationMe = (me) => {
    setMe(me)
  }

  const logout = () => {
    resetAuthToken()
  }

  return (
      <AuthContext.Provider
          value={{
            login,
            logout,
            informationMe,
            me,
            isAuthenticated,
            authToken,
          }}
      >
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
