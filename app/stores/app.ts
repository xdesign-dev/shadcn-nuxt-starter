import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const currentUser = ref<any>()
  const getUserInfo = computed(() => currentUser.value)
  const isLogin = computed(() => !!currentUser.value?.token)
  const getToken = computed(() => currentUser.value?.token)
  const setCurrentUser = (info) => {
    currentUser.value = info
  }
  const login = async (params) => {
    const { login } = useApi()
    const { data } = await login.login(params)
    currentUser.value = data
    return data
  }
  const clearUserInfo = () => {
    currentUser.value = undefined
  }
  const logout = async () => {
    const { login } = useApi()
    await login.logout()
    clearUserInfo()
  }

  return {
    currentUser,
    login,
    logout,
    getUserInfo,
    getToken,
    isLogin,
    clearUserInfo,
    setCurrentUser,
  }
}, {
  persist: true,
  // persist: { storage: persistedState.localStorage }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
