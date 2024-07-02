import { useAuth } from '~/stores/auth'

const privateRoutes = [
  '/account',
  '/checkOut'
]

export default defineNuxtRouteMiddleware((to, from) => {
  const app = useNuxtApp()
  const authStore = useAuth(app.$pinia)

  const isPrivateRoute = privateRoutes.some(privetRoute => to.path.includes(privetRoute))
  const isUserAuthed = authStore.isUserAuthed
  if (isPrivateRoute && !isUserAuthed) {
    return navigateTo('/')
  }
})
