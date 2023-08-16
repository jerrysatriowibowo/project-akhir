<template>
<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Tentang</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Servis</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Visi & Misi</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Keahlian</h4>
          <ul>
            <li><a href="#">Express</a></li>
            <li><a href="#">Backend</a></li>
            <li><a href="#">UI & UX</a></li>
            <li><a href="#">Database</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Bantuan</h4>
          <ul>
            <li><a href="#">Kontak</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">21221753119@smkassalaambandung.sch.id</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow us on</h4>
          <div class="social-media">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="fixed-footer">
    <div class="container">Copyright &copy; 2023 SmkAssalaam & @zyyalfyu_</div>
  </div>
</template>
<style>
body {
 line-height: 1.5;
 font-family: "Poppins", sans-serif;
}
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
.container {
 max-width: 1170px;
 margin: auto;
}
.row {
 display: flex;
 flex-wrap: wrap;
}
ul {
 list-style: none;
}
.footer {
   background: linear-gradient(
       120deg,
       #1d1d1d 20.69%,
       #525252 50.19%,
       #1d1d1d 79.69%
   );
 padding: 70px 0;
}
.footer-col {
 width: 25%;
 padding: 0 15px;
}
.footer-col h4 {
 font-size: 18px;
 color: rgba(255, 255, 255, 1);
 text-transform: capitalize;
 margin-bottom: 35px;
 font-weight: 500;
 position: relative;
}
.footer-col h4::before {
 content: "";
 position: absolute;
 left: 0;
 bottom: -10px;
 background-color: rgba(0, 3, 255, 0.8);
 height: 2px;
 box-sizing: border-box;
 width: 50px;
}
.footer-col ul li:not(:last-child) {
 margin-bottom: 10px;
}
.footer-col ul li a {
 font-size: 16px;
 text-transform: capitalize;
 color: rgba(255, 255, 255, 1);
 text-decoration: none;
 font-weight: 300;
 color: #bbbbbb;
 display: block;
 transition: all 0.3s ease;
}
.footer-col ul li a:hover {
 color: rgba(241, 241, 247, 0.8);
 padding-left: 8px;
}
.footer-col .social-media a {
 display: inline-block;
 height: 40px;
 width: 40px;
 background-color: rgba(255, 255, 255, 0.2);
 margin: 0 10px 10px 0;
 text-align: center;
 line-height: 40px;
 border-radius: 50%;
 color: rgba(255, 255, 255, 0.5);
 margin: 0 10px 10px 0;
 transition: all 0.5s ease;
}
.footer-col .social-media a:hover {
 color: rgb(242, 242, 252);
 background-color: rgba(236, 236, 236, 0.8);
}
.fixed-footer {
   width: 100%;
   position: relative;
   background: #1F1D1D;
   margin: 0 10px 10px 0;
   padding: 10px 0;
   color: rgb(250, 245, 245);
   text-align: center;
 }
 .fixed-footer {
   bottom: 0;
 }
 
/* /responsive/ */
@media (max-width: 767px) {
 .footer-col {
   width: 50%;
   margin-bottom: 30px;
 }
}
@media (max-width: 574px) {
 .footer-col {
   width: 100%;
 }
}
</style>