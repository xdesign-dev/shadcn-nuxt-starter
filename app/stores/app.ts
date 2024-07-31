import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const currentUser = ref<any>()
  const getUserInfo = computed(() => currentUser.value)
  const isLogin = computed(() => !!currentUser.value?.token)
  const getToken = computed(() => currentUser.value?.token)
  const setCurrentUser = (info: any) => {
    currentUser.value = info
  }

  const clearUserInfo = () => {
    currentUser.value = undefined
  }

  return {
    currentUser,
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
