import { createStore } from "vuex";
import auth from "./modules/auth";
import brand from "./modules/brand";
import kategori from "./modules/kategori";
import product from "./modules/product";
import user from "./modules/user";
import cart from "./modules/cart";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brand,
        kategori,
        product,
        user,
        cart
    }
})
export default store;