import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router'
import NiceModal from '@ebay/nice-modal-react'
import { ApolloProvider } from '@apollo/client'
import client from '@/client'
import router from '@/router'


function App() {
  return (
      <>
        <RecoilRoot>
          <ApolloProvider client={client}>
            <NiceModal.Provider>
              <RouterProvider router={router}/>
            </NiceModal.Provider>
          </ApolloProvider>
        </RecoilRoot>
      </>
  )
}

export default App