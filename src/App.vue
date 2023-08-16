<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import Footer from "./components/Footer.vue"
</script>
<template>
  
    <Navbar>
      <template #logo>
        <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
          MCStore.
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink isActive link="/">Home</NavbarLink>
          <NavbarLink link="/produk">Produk</NavbarLink>
          <NavbarLink link="/contact">Kontak</NavbarLink>
          <NavbarLink link="/login">Login</NavbarLink>
        </NavbarCollapse>
      </template>
    </Navbar>
    <router-view />
    <Footer></Footer>
</template>