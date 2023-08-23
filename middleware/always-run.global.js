import { useAuth } from '~/stores/auth'

const isPrivateRoutes = [
  '/account',
  '/checkOut'
]

export default defineNuxtRouteMiddleware((to, from) => {
  const app = useNuxtApp()
  const authStore = useAuth(app.$pinia)

  const isPrivateRoute = isPrivateRoutes.some(privetRoute => to.path.includes(privetRoute))
  const isUserAuthed = authStore.isUserAuthed
  if (isPrivateRoute && !isUserAuthed) {
    return navigateTo('/')
  }
})
