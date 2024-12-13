import { createBrowserRouter, Outlet } from 'react-router'
import HomePage from '@/pages'
import ModelsPage from '@/pages/models'
import MainLayout from '@/layouts/main'


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