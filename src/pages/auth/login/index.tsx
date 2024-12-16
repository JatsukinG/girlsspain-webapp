//@ts-nocheck
//TODO fix ts errors
import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {useAuth} from "@auth/hooks";
import {formErrors} from "@constants";
import TokenAuthMutation from "@auth/mutations/tokenAuthMutation.ts";
import AuthFormInput from "@auth/components/AuthFormInput.tsx";
import {GraphQLErrorsRenderer} from "@components";


const LoginPage = () => {
    const { informationMe, login } = useAuth()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [graphQLErrors, setGraphQLErrors] = useState(null)

    const [tokenAuth] = useMutation(TokenAuthMutation, {
        onCompleted: (data) => {
            const from = searchParams.get('from')
            if (data.tokenAuth?.token){
                login(data.tokenAuth.token)
                navigate(from ? from : '/')
            } 
        },
        // onError: (error) => {
        //     console.error('Error en la mutación:', error);
        //     setGraphQLErrors(error);
        // }
      })

    const initialValues = {
        email: 'j.bayron.b@gmail.com',
        password: 'poiupoiu',
    }

    const onSubmit = async (values) => {
        await tokenAuth({
                variables:{
                    email:values.email,
                    password:values.password
                }
            }
        )
    }

    // console.log("url es", import.meta.env.VITE_API_GRAPHQL_URL);

    const validationSchema = Yup.object({
        email: Yup.string().required(formErrors.required),
        password: Yup.string().required(formErrors.required),
    })



    return (

        <div className='flex flex-start'>
            <section className="flex">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        GIRLS
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                {/* here goes authforminput */}
                                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                    {
                                        ({ isSubmitting }) => (
                                            <Form className='flex flex-col gap-5'>
                                                <AuthFormInput
                                                    label="email"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    placeholder="email" />
                                                <AuthFormInput
                                                    label="Password"
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password" />
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                                </div>
                                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                    {isSubmitting ? "Logging in..." : 'Login'}
                                                </button>
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                                </p>
                                                {
                                                    graphQLErrors &&
                                                    <GraphQLErrorsRenderer errors={graphQLErrors} />
                                                }
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginPage