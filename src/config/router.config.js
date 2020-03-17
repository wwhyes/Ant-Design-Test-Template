import { LoginLayout } from '@/layouts'

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    component: LoginLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'UserLogin',
        component: () => import('@/views/user/login')
      },
      {
        path: '/user/register',
        name: 'UserRegister',
        component: () => import('@/views/user/register')
      }
    ]
  }
]
