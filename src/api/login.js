import client from '@/utils/request.js'

const api = {
  Login: '/v1/login/login'
}

export default api
export const login = async data => client.post(api.Login, { data })
