import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Register from "../views/Register.vue";
import Brand from "../views/Brand.vue";
import Kategori from "../views/Kategori.vue";
import Profile from "../views/Profile.vue";
import Order from "../views/Order.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
    {
        path: "/registrasi",
        name: "Register",
        component: Register,
    },
    {
        path: "/produk",
        name: "Product",
        component: Product,
        meta: { requireLogin: true },
    },
    {
        path: "/product/:slug",
        name: "SingleProduct",
        component: SingleProduct,
        props: true,
        meta: { requireLogin: true },
    },
    {
        path: "/keranjang",
        name: "Cart",
        component: Cart,
        props: true,
        meta: { requireLogin: true },
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requireLogin: true },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
        meta: { requireLogin: true },
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
        meta: { requireLogin: true },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { requireLogin: true },
    },
    {
        path: '/order/:orderCode',
        name: 'Order',
        component: Order,
        props: true,
        meta: { requireLogin: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters['auth/isAuthenticated']) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters['auth/isAuthenticated']) {
        next("/login");
    } else {
        next();
    }
});

export default router;