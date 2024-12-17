//@ts-nocheck
//TODO fix ts errors
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@auth/hooks'
import { formErrors } from '@constants'
import AuthFormInput from '@auth/components/AuthFormInput.tsx'
import TokenAuthMutation from '@auth/mutations/tokenAuthMutation.ts'

interface Values {
  email: string
  password: string
}


const LoginForm = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [tokenAuth, { loading }] = useMutation(TokenAuthMutation, {
    onCompleted: (data) => {
      const from = searchParams.get('from')
      if (data.tokenAuth?.token) {
        login(data.tokenAuth.token)
        navigate(from ? from : '/')
      }
    },
    // onError: (error) => {
    //     console.error('Error en la mutación:', error);
    // }
  })

  const initialValues = {
    email: 'j.bayron.b@gmail.com',
    password: 'poiupoiu',
  }

  const validationSchema = Yup.object({
    email: Yup.string().required(formErrors.required),
    password: Yup.string().required(formErrors.required),
  })

  const onSubmit = async (values: Values) => {
    await tokenAuth({
          variables: {
            email: values.email,
            password: values.password,
          },
        },
    )
  }

  return (
      <div className="bg-white rounded-lg p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Inicia sesión
        </h1>
        <div className="space-y-4 md:space-y-6">
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
          >
            <Form className="flex flex-col gap-5">
              <AuthFormInput
                  label="email"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email"/>
              <AuthFormInput
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"/>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox"
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember
                      me</label>
                  </div>
                </div>
                <a href="#"
                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                  password?</a>
              </div>
              <button type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#"
                                              className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                up</a>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
  )
}

export default LoginForm