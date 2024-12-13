import { createBrowserRouter, Outlet } from 'react-router'
import HomePage from '../pages'
import MainLayout from '../layout/main/'
import ModelsPage from '../pages/models'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <MainLayout>
          <Outlet/>
        </MainLayout>
    ),
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: '/models',
        element: <ModelsPage/>,
      },
    ],
  },
])

export default router