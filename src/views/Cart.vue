<template>
  <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" class="text-2xl font-bold text-gray-800"></a>
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="/produk">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg></a>
            <span class="font-semibold text-gray-500">Produk</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="/keranjang">2</a>
          <span class="font-semibold text-gray-900">Keranjang</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span class="font-semibold text-gray-500">Checkout</span>
        </li>
      </ul>
    </div>
  </div>
</div>
  <section class="bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Keranjang</h1>
    </div>

    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <div v-for="cart in getCart" :key="cart.cart_id">
                <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div class="shrink-0">
                    <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://ecommerce.olipiskandar.com/public/uploads/all/UpUx213sXC5XBW07vbXn1vkWMWxTu95CDDbMzwkF.jpg" alt="" />
                  </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{{ cart.name }}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-black-1000">1Kg - 5Kg</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-30 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{{ (cart.regular_price).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>

                      <div class="class= grid md:grid-cols-7 mb-4 mt-7">
                        <div class="flex items-center border-gray-100">
                          <button @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'})" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-yellow-50"> - </button>
                            <span class="mr-2 ml-2">{{ cart.qty }}</span>
                          <button @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'})" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-yellow-50"> + </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" @click="removeItem(cart.cart_id)" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>

          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-black-1000">Subtotal</p>
              <p class="text-lg font-semibold text-black-900">Rp {{ totalHarga() }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-black-1000">Ongkir</p>
              <p class="text-lg font-semibold text-black-900">{{ (ongkir).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-black-900">Total</p>
            <p class="text-2xl font-semibold text-black-900">Rp {{ totalHarga() }}</p>
          </div>

          <div class="mt-6 text-center">
            <router-link to="/checkout">
              <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-green-700 px-6 py-4 text-lg font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-500">
                Beli Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
      return {
        ongkir: 18000
      }
    },
  computed:{
    ...mapGetters('cart', ['getCart'])
  },
  methods: {
    ...mapActions('cart', ['fetchCart']),
    ...mapActions('product', ['fetchProduct']),
    totalHarga() {
      this.total = this.getCart.reduce((acc, product) => {
        return acc + parseFloat(product.regular_price * product.qty + this.ongkir);
      }, 0);
      return this.total.toFixed(2);
    },
    removeItem(cartId) {
      this.$store.dispatch('cart/removeFromCart', cartId)
    },
    changeQty(cartId, typeQty) {
      this.$store.dispatch('cart/changeQuantity', cartId, typeQty)
    },
  },
  beforeMount() {
    this.fetchProduct();
  },
  mounted(){
    this.fetchCart();
  }
}
</script>