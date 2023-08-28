import axios from "axios";

const product = {
    namespaced: true,
    state: {
        productData: [],
        getSingleProduct: [],
        cart: [],
    },
    getters: {
        getProduct: (state) => state.productData,
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/8"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchSingleProduct({commit}, slug) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`
                );
                commit("SET_SINGLE_PRODUCT", response.data['data']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async addToCart({ commit }, productId) {
            try {
              const response = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                {
                    "variation_id": productId,
                    "qty":  1,
                    "temp_user_id": null,
                }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
                });
                commit("ADD_TO_CART", response.data)
                alert("Barang Berhasil Di Tambah Ke Keranjang")
                console.log(response.data)
            } catch (error) {
              console.error(error);

            }
          },
    },
    mutations: {
        SET_PRODUK(state, product) {
            state.productData = product;
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.getSingleProduct = product;
        },
        ADD_TO_CART(state, cart) {
            state.cart = cart
        },
    },
};
export default product;