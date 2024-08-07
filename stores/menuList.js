import { defineStore } from 'pinia'

export const useMenuList = defineStore('menuList', {
    state () {
        return {
            menuList: [
                {
                    title: 'menuTitleKitchen',
                    icon: '/images/icons/kitchen-icon.svg'
                },
                {
                    title: 'menuTitleBedroom',
                    icon: '/images/icons/bedroom-icon.svg'
                },
                {
                    title: 'menuTitleLivingRooms',
                    icon: '/images/icons/livingroom-icon.svg'
                },
                {
                    title: 'menuTitleLobby',
                    icon: '/images/icons/closet-icon.svg'
                },
                {
                    title: 'menuTitleOffice',
                    icon: '/images/icons/office-icon.svg'
                },
                {
                    title: 'menuTitleChildrenRoom',
                    icon: '/images/icons/childrenroom-icon.svg'
                },
                {
                    title: 'menuTitleSale',
                    icon: '/images/icons/sale.svg'
                },
                {
                    title: 'menuTitleNew',
                    icon: '/images/icons/new.svg'
                },
                {
                    title: 'menuTitleMattresses',
                    icon: '/images/icons/mattress.svg'
                },
                {
                    title: 'menuTitleCushioned',
                    icon: '/images/icons/armchair.svg'
                },
                {
                    title: 'menuTitleCupboard',
                    icon: '/images/icons/cupboard.svg'
                }
            ]
        }
    }
    // getters: {
    //    getMenuList: (state) => this.state.menuList
    // }

})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useMenuList, import.meta.hot))
// }
