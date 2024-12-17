import LoginForm from '@auth/components/LoginForm.tsx'


const LoginPage = () => {
  return (
      <div className="flex flex-col items-center">
        <a href="#" className="mb-6 text-2xl font-semibold text-fuchsia-500">
          Agencia
        </a>
        <LoginForm/>
      </div>
  )
}

export default LoginPage