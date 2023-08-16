import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";

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
    },
    {
        path: "/produk",
        name: "Product",
        component: Product,
    },
    {
        path: "/detail",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/keranjang",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;