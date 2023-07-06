import { defineStore } from 'pinia'

export const useMenuList = defineStore('menuList', {
    // namespaced: true,
    state () {
        return {
            menuList: [
                {
                    title: 'Kitchen',
                    icon: '/images/icons/kitchen-icon.svg'
                },
                {
                    title: 'Bedroom',
                    icon: '/images//icons/bedroom-icon.svg'
                },
                {
                    title: 'Living rooms',
                    icon: '/images//icons/livingroom-icon.svg'
                },
                {
                    title: 'Lobby',
                    icon: '/images//icons/closet-icon.svg'
                },
                {
                    title: 'Office',
                    icon: '/images//icons/office-icon.svg'
                },
                {
                    title: 'Children room',
                    icon: '/images//icons/childrenroom-icon.svg'
                },
                {
                    title: 'Sale',
                    icon: '/images//icons/sale.svg'
                },
                {
                    title: 'New',
                    icon: '/images//icons/new.svg'
                },
                {
                    title: 'Mattresses',
                    icon: '/images//icons/mattress.svg'
                },
                {
                    title: 'Cushioned furniture',
                    icon: '/images//icons/armchair.svg'
                },
                {
                    title: 'Cupboard',
                    icon: '/images//icons/cupboard.svg'
                }
            ]
        }
    },
    getters: {
       getMenuList (state) {
         return this.state.menuList
       }
    }

})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useMenuList, import.meta.hot))
// }
