import { createBrowserRouter, Outlet } from 'react-router'
import HomePage from '@/pages'
import ModelsPage from '@/pages/models'
import MainLayout from '@/layouts/main'
import ModelPage from '@/pages/models/model'


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
        element: <Outlet/>,
        children: [
          {
            path: '/models',
            element: <ModelsPage/>,
          },
          {
            path: '/models/:modelId',
            element: <ModelPage/>,
          },
        ],
      },
    ],
  },
])

export default router