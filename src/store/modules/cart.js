import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        cart: [],
        dataCheckout: [],
    },
    getters: {
        getCart: (state) => state.cart,
        getCheckout: (state) => state.dataCheckout,
    },
    actions: {
        async fetchCart({ commit }) {
            try {
                const dataCart = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts",
                    {
                        temp_user_id: null,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                console.log(dataCart.data.cart_items.data);
                commit("SET_CART", dataCart.data.cart_items.data);
            } catch (error) {
                alert("Error Bang");
                console.log(error);
            }
        },
        async removeFromCart({ commit, dispatch}, cartId) {
            try {
                const response = await axios.post(
                    'https://ecommerce.olipiskandar.com/api/v1/carts/destroy',
                    {
                        cart_id: cartId,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                console.log(response.data.message);
                dispatch("fetchCart");
            } catch (error) {
                alert("Gagal Hapus Barang");
                console.log(error);
            }
        },
        async changeQuantity({ commit, dispatch}, {cartId, typeQty}) {
            try {
                const response = await axios.post(
                    'https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity',
                    {
                        cart_id: cartId,
                        temp_user_id: null,
                        type: typeQty
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                console.log(response.data.message);
                dispatch("fetchCart");
            } catch (error) {
                alert("Gagal Tambah Jumlah");
                console.log(error);
            }
        },
        async checkoutCart({ commit, dispatch },{ shippingAddress, billingAddress, paymentType, deliveryType, cart_item_ids,}) {
            try {
              const response = await axios.post(
                `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
                {
                  shipping_address_id: shippingAddress,
                  billing_address_id: billingAddress,
                  payment_type: paymentType,
                  delivery_type: deliveryType,
                  cart_item_ids: cart_item_ids,
                  transactionId: null,
                  receipt: null,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              console.log(response.data.message);
              dispatch("fetchCart");
              commit('SET_CHECKOUT', response.data);
            } catch (error) {
              alert("Gagal Checkout");
              console.log(error);
            }
        },
    },
    mutations: {
        SET_CART(state, cart) {
            state.cart = cart;
        },
        SET_CHECKOUT(state, checkout) {
            state.dataCheckout = checkout;
        },
    },
};

export default cart;