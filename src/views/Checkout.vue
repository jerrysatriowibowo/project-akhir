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
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="/keranjang">2</a>
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
<div class="relative mx-auto w-full bg-white">
  <div class="grid min-h-screen grid-cols-10">
    <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div class="mx-auto w-full max-w-lg">
        <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Halaman Checkout.<span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
        <form action="" class="mt-10 flex flex-col space-y-4">
          <div><label for="nama" class="text-xs font-semibold text-black-500">Nama Lengkap</label><input type="text" id="nama" name="nama" placeholder="Nama Lengkap" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          <div><label for="email" class="text-xs font-semibold text-black-500">Email</label><input type="email" id="email" name="email" placeholder="email@gmail.com" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          <div class="relative"><label for="card-number" class="text-xs font-semibold text-black-500">Kartu Anda</label><input type="text" id="card-number" name="card-number" placeholder="xxxx-xxxx-xxxx" class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div>
          <div><label for="card-name" class="sr-only"></label><input type="text" id="card-name" name="card-name" placeholder="Kode Promo (Jika Ada)" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-black-900 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
        </form>
        <p class="mt-10 text-center text-sm font-semibold text-gray-500">Terjadi Masalah Saat Checkout?<a href="#" class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Bantuan</a></p>
        <button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Buat Pesanan</button>
      </div>
    </div>
    <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 class="sr-only">Order summary</h2>
      <div>
        <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div class="relative">
        <ul class="space-y-5">
          <li class="flex justify-between">
            <div class="inline-flex">
              <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="max-h-16" />
              <div class="ml-3">
                <p class="text-base font-semibold text-white">Sepatu Daun Singkong 3</p>
                <p class="text-sm font-medium text-white text-opacity-80">38 - 42 Ukuran</p>
              </div>
            </div>
            <p class="text-sm font-semibold text-white">$139</p>
          </li>
        </ul>
        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div class="space-y-2">
          <p class="flex justify-between text-lg font-bold text-white"><span>Subtotal:</span><span>$139</span></p>
          <p class="flex justify-between text-sm font-medium text-white"><span>Total: (Termasuk biaya pengiriman)</span><span>$144</span></p>
        </div>
      </div>
      <div class="relative mt-10 text-white">
        <h3 class="mb-5 text-lg font-bold">Dukung</h3>
        <p class="text-sm font-semibold">+62-888-0000-8888</p>
        <p class="mt-1 text-sm font-semibold">21221753119@smkassalaambandung.sch.id</p>
      </div>
      <div class="relative mt-10 flex">
        <p class="flex flex-col"><span class="text-sm font-bold text-white">Jaminan Uang Kembali.</span><span class="text-xs font-medium text-white">Jika Ada Cacat Atau Kerusakan Pada Barang, Uang Akan Di Kembalikan.</span></p>
      </div>
    </div>
  </div>
</div>
</template>