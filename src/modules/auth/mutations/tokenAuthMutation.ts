import {gql} from '@apollo/client'

const tokenAuthMutation = gql(`
  mutation LoginMutation($email: String! $password: String!) {
    tokenAuth(email: $email, password: $password){
      token
      payload
      refreshExpiresIn
    }
  }
`)

export default tokenAuthMutation