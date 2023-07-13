import { defineStore } from 'pinia'

export const useProducts = defineStore('productsStore', {
  state: () => ({
      products: [
        {
          id: 'qw1',
          titleCard: 'Valencia Beige',
          kindProduct: 'bar stool',
          typeProduct: 'artificial',
          category: 'kitchen',
          img: 'images/img/chair-Beige.jpg',
          price: 28,
          width: 42,
          deep: 42,
          height: 65,
          like: false
        },
        {
          id: 'qw2',
          titleCard: 'Tolics-2 whire Gloss',
          kindProduct: 'bar stool',
          typeProduct: 'artificial',
          category: 'kitchen',
          img: 'images/img/chair-white-Gloss.jpg',
          price: 35,
          width: 43,
          deep: 43,
          height: 77,
          like: false
        },
        {
          id: 'qw3',
          titleCard: 'Dins Velwet yellow',
          kindProduct: 'sofa',
          typeProduct: 'soft',
          category: 'living room',
          img: 'images/img/sofa-yellow.jpg',
          price: 529,
          width: 2100,
          deep: 1600,
          height: 45,
          like: false
        },
        {
          id: 'qw4',
          titleCard: 'Koosken Navy blue',
          kindProduct: 'sofa',
          typeProduct: 'soft',
          category: 'living room',
          img: 'images/img/sofa-Koosken.jpg',
          price: 450,
          width: 1950,
          deep: 1100,
          height: 44,
          like: false
        },
        {
          id: 'qw5',
          titleCard: 'Sherona barhat gray',
          kindProduct: 'bed',
          typeProduct: 'leather',
          category: 'bedroom',
          img: 'images/img/bed-Sherona.jpg',
          price: 459,
          width: 2050,
          deep: 1800,
          height: 44,
          like: false
        },
        {
          id: 'qw6',
          titleCard: 'Avinghon-1',
          kindProduct: 'bufet',
          typeProduct: 'artificial',
          category: 'kitchen',
          img: 'images/img/bufet-Avinghon.jpg',
          price: 399,
          width: 1200,
          deep: 500,
          height: 2100,
          like: false
        },
        {
          id: 'qw7',
          titleCard: 'Stella oak sonoma',
          kindProduct: 'commode',
          typeProduct: 'artificial',
          category: 'bedroom',
          img: 'images/img/commode-Stella.jpg',
          price: 229,
          width: 1200,
          deep: 500,
          height: 1300,
          like: false
        },
        {
          id: 'qw8',
          titleCard: 'Ravenna-1 light',
          kindProduct: 'commode',
          typeProduct: 'artificial',
          category: 'bedroom',
          img: 'images/img/commode-Ravenna.jpg',
          price: 350,
          width: 1200,
          deep: 400,
          height: 1100,
          like: false
        },
        {
          id: 'qw9',
          titleCard: 'Benflit gray',
          kindProduct: 'table',
          typeProduct: 'artificial',
          category: 'living room',
          img: 'images/img/table-Benflit.jpg',
          price: 159,
          width: 450,
          deep: 450,
          height: 600,
          like: false
        },
        {
          id: 'qw10',
          titleCard: 'Tiffany Woodline creem',
          kindProduct: 'table',
          typeProduct: 'wood',
          category: 'living room',
          img: 'images/img/table-Tiffany.jpg',
          price: 219,
          width: 1100,
          deep: 550,
          height: 750,
          like: false
        },
        {
          id: 'qw11',
          titleCard: 'Valencia Beige',
          kindProduct: 'cupboard',
          typeProduct: 'artificial',
          category: 'living room',
          img: 'images/img/closet-Beige.jpg',
          price: 369,
          width: 1200,
          deep: 600,
          height: 2000,
          like: false
        },
        {
          id: 'qw12',
          titleCard: 'Light-3 white',
          kindProduct: 'cupboard',
          typeProduct: 'artificial',
          category: 'living room',
          img: 'images/img/closet-Light.jpg',
          price: 459,
          width: 1200,
          deep: 600,
          height: 2000,
          like: false
        },
        {
          id: 'qw13',
          titleCard: 'Villy pink',
          kindProduct: 'kids sofa',
          typeProduct: 'soft',
          category: 'bedroom',
          img: 'images/img/sofa-Villy.jpg',
          price: 399,
          width: 1100,
          deep: 1100,
          height: 450,
          like: false
        },
        {
          id: 'qw14',
          titleCard: 'Saint-Paolo Velvet Brown',
          kindProduct: 'kids sofa',
          typeProduct: 'soft',
          category: 'bedroom',
          img: 'images/img/sofa-Saint-Paolo.jpg',
          price: 419,
          width: 1300,
          deep: 900,
          height: 450,
          like: false
        },
        {
          id: 'qw15',
          titleCard: 'Valencia Beige',
          kindProduct: 'bookcase',
          typeProduct: 'wood',
          category: 'living room',
          img: 'images/img/bookcase-Beige.jpg',
          price: 360,
          width: 1600,
          deep: 400,
          height: 2000,
          like: false
        }
      ]
  }),
  getters: {
    getProducts () {
      return this.products
    },
    // отдаем в компонент продукт, найденный по id
    getProduct (id) {
      return this.products.find(item => item.id === id)
    },
    // отдаем в компонент те продукты, у которых найдены совпадения
    searchProduct (query) {
      if (!query) return []
      return this.products.filter(item => {
        const productsIncludeSearchParam = [
          'titleCard',
          'kindProduct',
          'typeProduct',
          'category'
        ].find(param => item[param].toLowerCase().includes(query.trim().toLowerCase()))

        return productsIncludeSearchParam
      })
    }
  }
})
