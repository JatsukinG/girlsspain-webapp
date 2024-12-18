import { createBrowserRouter, Outlet } from 'react-router'
import HomePage from '@/pages'
import ModelsPage from '@/pages/models'
import MainLayout from '@/layouts/main'
import LoginPage from '@/pages/auth/login'
import ModelPage from '@/pages/models/model'
import AuthProvider from '@auth/contexts/AuthProvider'
import AuthLayout from '@/layouts/auth'


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
  {
    path: '/auth',
    element: (
        <AuthLayout>
          <AuthProvider>
            <Outlet/>
          </AuthProvider>
        </AuthLayout>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
    ],
  },
])

export default router