<template>
    <div class="pt-15 bg-white">
      <div class="container mx-auto px-5">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="message text-center">
          <h1 class="text-3xl font-bold pt-10">Terimakasih Telah Memesan</h1>
          <p class="italic">Terimakasih Kepada {{ getOrder.user.name }} telah berbelanja dan mempercayakan MCStore.</p>
        </div>
      </div>
    </div><br>

    <div class="w-full mb-12 px-4 relative ">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-900 text-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-white ">Detail Pemesanan</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto ">
      <div class="grid grid-cols-4 gap-4 items-center bg-transparent border-collapse m-5">
        <div class="font-bold">ID Pesanan</div>
        <div>: {{ getOrder.code }}</div>
        <div class="font-bold">Tanggal Checkout</div>
        <div>: {{ getOrder.date }}</div>
        <div class="font-bold">Nama Barang</div>
        <div>: {{ getOrder.orders[0].shop.name }}</div>
        <div class="font-bold">Slug Barang</div>
        <div>: {{ getOrder.orders[0].shop.slug }}</div>
        <div class="font-bold">Nama Pembeli</div>
        <div>: {{ getOrder.user.name }}</div>
        <div class="font-bold">Jumlah Barang</div>
        <div>: {{ getOrder.orders[0].products.data[0].quantity }}</div>
        <div class="font-bold">Email Pembeli</div>
        <div>: {{ getOrder.user.email }}</div>
        <div class="font-bold">Total Harga</div>
        <div>: {{ (getOrder.orders[0].grand_total).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</div>
        <div class="font-bold">Nomor Telepon</div>
        <div>: {{ getOrder.shipping_address.phone }}</div>
        <div class="font-bold">Jenis Pembayaran</div>
        <div>: {{ getOrder.orders[0].payment_type }}</div>
        <div class="font-bold">Alamat Pembeli</div>
        <div>: {{ getOrder.shipping_address.address }} {{ getOrder.shipping_address.country }}</div>
        <div class="font-bold">Jenis Pengiriman</div>
        <div>: {{ getOrder.orders[0].delivery_type }}</div>
        <div class="font-bold">Alamat Tagihan</div>
        <div>: {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.country }}, {{ getOrder.shipping_address.postal_code }}</div>
        <div class="font-bold">Status Pesanan</div>
        <div>: {{ getOrder.orders[0].payment_status }}</div>
      </div>
    </div>
  </div>
</div>

  </template>
<style>
* {
font-family: 'Source Sans Pro';
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
    ...mapGetters('user', ['getUser']),
  },
  methods: {
    ...mapActions('user', ['getUserInfo']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
  async mounted(){
    const user = await this.getUserInfo();

    if (user) {
      this.$store.commit('user/SET_USER', user)
    }
  }
};
</script>