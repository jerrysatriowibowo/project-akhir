<template>
    <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img class="mx-auto h-auto w-full rounded-full" src="../assets/img/gojo.jpg" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.name }}</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-500">{{ user.email }}</h3>
    <div v-for="prof in address.data">
    <p class="text-center text-sm leading-6 text-gray-1000 hover:text-gray-600">{{ prof.address }}, {{  prof.city }}, {{  prof.state }}, {{  prof.country }}, {{  prof.postal_code }}</p>
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>No Tlp</span>
        <span class="ml-auto">{{ prof.phone }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Tempat Tanggal Lahir</span>
        <span class="ml-auto">Jepang, 6 Agustus 1945</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Status</span>
        <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Pelajar</span></span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Bergabung Pada</span>
        <span class="ml-auto">17 Agustus 1945</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Alamat</span>
        <span class="ml-auto">{{  prof.city }}, {{  prof.state }}, {{  prof.country }}</span>
      </li>
    </ul>
  </div>
</div>
</div></center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUser']),
        ...mapGetters('auth', ['getterUserAddress']),
        user() {
          return this.getUser
        },
        address() {
          return this.getterUserAddress
        }
    },
    methods: {
        ...mapActions('user', ['getUserInfo']),
        ...mapActions('auth', ['getUserAddress']),
    },
    async mounted(){
      this.getUserAddress();

      const user = await this.getUserInfo();

      if (user) {
        this.$store.commit('user/SET_USER', user)
      }
    }
}
</script>