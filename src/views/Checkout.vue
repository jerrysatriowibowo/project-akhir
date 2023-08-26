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
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="/keranjang">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg></a>
            <span class="font-semibold text-gray-500">Keranjang</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">3</a>
          <span class="font-semibold text-gray-900">Checkout</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<div v-for="cart in getCart" :key="cart.cart_id">
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 l:px-20">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Checkout MCStore.</p>
      <p class="text-gray-400">Cek Barang Yang Akan Kamu Beli Dan Isi Atau Selesaikan Pembayaran.</p>
        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://ecommerce.olipiskandar.com/public/uploads/all/UpUx213sXC5XBW07vbXn1vkWMWxTu95CDDbMzwkF.jpg" alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">{{ cart.name }}</span>
              <span class="float-right text-gray-400">Jumlah : {{ cart.qty }}</span>
            <p class="text-lg font-bold">{{ (cart.regular_price * cart.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
          </div>
        </div>
      </div>

    <p class="mt-8 text-lg font-medium">Metode Pembayaran</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:bg-green-50 flex cursor-pointer select-none rounded-lg border border-green-300 p-4" for="radio_1">
          <img class="w-10 object-contain" src="https://png.pngtree.com/png-vector/20210531/ourmid/pngtree-cool-3d-text-clipart-red-design-cod-cash-on-delivery-vector-png-image_3396451.jpg" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Cash Or Duel</span>
          </div>
        </label>
      </div>
    </form>

    <p class="mt-8 text-lg font-medium">Metode Pengiriman</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_reguler" type="radio" name="radio" checked />
        <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:bg-green-50 flex cursor-pointer select-none rounded-lg border border-green-300 p-4" for="radio_reguler">
          <img class="w-14 object-contain" src="data:image/jpeg;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Reguler</span>
            <p class="text-slate-500 text-sm leading-6">Estimasi : 4-6 Hari</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_express" type="radio" name="radio" checked />
        <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white"></span>
          <label class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:bg-green-50 flex cursor-pointer select-none rounded-lg border border-green-300 p-4" for="radio_express">
            <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Express</span>
            <p class="text-slate-500 text-sm leading-6">Estimasi : 2-4 Hari</p>
          </div>
        </label>
      </div>
    </form>
  </div>

  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Detail Pembayaran</p>
    <p class="text-gray-400">Selesaikan Pembelian Anda Di Bawah Sini.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>

      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Nama Pemilik</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="Masukan Nama Lengkap" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>

      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Nomor Telepon</label>
      <div class="relative">
        <input type="number" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="Masukan Nomor Telepon" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>

      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Kartu</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="number" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
      </div>

      <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Kota</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="Detail Kota" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAB4CAMAAABsOSjPAAAADFBMVEX/AAD/////Q0P/6elkBl58AAAAYklEQVR4nO3OAQkAIBAAsVf7d7bFwcOWYDMAAAAAAAAAAAAAFO5C8xaas5B0RboiXZGuSFekK9IV6Yp0RboiXZGuSFekK9IV6Yp0RboiXZGuSFekK9IV6Yp0RboiXZGuSFc+tiItAbqo8fsAAAAASUVORK5CYII=" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500">
          <option value="Aceh">Aceh</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Sumatra Barat">Sumatra Barat</option>
            <option value="Sumatra Selatan">Sumatra Selatan</option>
            <option value="Sumatra Utara">Sumatra Utara</option>
            <option value="Kalimantan Tengah">Kalimantan Tengah</option>
            <option value="Kalimantan Timur">Kalimantan Timur</option>
            <option value="Kalimantan Barat">Kalimantan Barat</option>
            <option value="Kalimantan Utara">Kalimantan Utara</option>
            <option value="Papua Pegunungan">Papua Pegunungan</option>
            <option value="Papua Selatan">Papua Selatan</option>
            <option value="Papua Barat">Papua Barat</option>
            <option value="Sulawesi Tengah">Sulawesi Tengah</option>
            <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
            <option value="Sulawesi Utara">Sulawesi Utara</option>
            <option value="Sulawesi Selatan">Sulawesi Selatan</option>
          </select>
        <input type="number" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-green-500 focus:ring-green-500" placeholder="Zip" />
      </div>

        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">{{ (cart.regular_price * cart.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">{{ (ongkir).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">{{ (totalHarga()).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
        </div>
      </div>
      <button class="mt-4 mb-8 w-full rounded-md bg-green-900 px-6 py-3 font-medium text-white">Buat Pesanan</button>
    </div>
  </div>
</div>
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
      return this.total;
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