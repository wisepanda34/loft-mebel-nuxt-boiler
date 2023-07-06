import { defineStore } from 'pinia'

export const useMenuList = defineStore('menuList', {
    // namespaced: true,
    state () {
        return {
            menuList: [
                {
                    title: 'Kitchen',
                    icon: '~/public/images/icons/kitchen-icon.svg'
                },
                {
                    title: 'Bedroom',
                    icon: '~/public/images/icons/bedroom-icon.svg'
                },
                {
                    title: 'Living rooms',
                    icon: '~/public/images/icons/livingroom-icon.svg'
                },
                {
                    title: 'Lobby',
                    icon: '~/public/images/icons/closet-icon.svg'
                },
                {
                    title: 'Office',
                    icon: '~/public/images/icons/office-icon.svg'
                },
                {
                    title: 'Children room',
                    icon: '~/public/images/icons/childrenroom-icon.svg'
                },
                {
                    title: 'Sale',
                    icon: '~/public/images/icons/sale.svg'
                },
                {
                    title: 'New',
                    icon: '~/public/images/icons/new.svg'
                },
                {
                    title: 'Mattresses',
                    icon: '~/public/images/icons/mattress.svg'
                },
                {
                    title: 'Cushioned furniture',
                    icon: '~/public/images/icons/armchair.svg'
                },
                {
                    title: 'Cupboard',
                    icon: '~/public/images/icons/cupboard.svg'
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
