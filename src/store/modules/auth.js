import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem("token") || "",
        loginError: null,
        userAddress: [],
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getterUserAddress: (state) => state.userAddress,
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/login",
                    credentials
                );
                const token = response.data.access_token;

                localStorage.setItem('token', token);[]
                commit("SET_TOKEN", token);
                commit("SET_LOGIN_ERROR", null);
                console.log("Token Tersimpan :", token);
                return true;
            } catch (error) {
                const errorMessage = error.response.data.message || "Login Gagal"
                commit('SET_LOGIN_ERROR', errorMessage)
                console.error(error);
                return false;
            }
        },
        async register({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
                    credentials
                );
                const token = response.data.access_token;

                commit("SET_TOKEN", token);
                console.log("Token Tersimpan :", token);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        async getUserAddress({ state, commit }) {
            try {
              const response = await axios.get(
                "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
                {
                  headers: {
                    Authorization: `Bearer ${state.token}`,
                  },
                }
              );
              commit("SET_ADDRESS", response.data)
              return response.data;
            } catch (error) {
              console.error(error);
              return null;
            }
        },
        logout({ commit }) {
            const token = localStorage.getItem("token");
            localStorage.removeItem("token");
            commit("SET_TOKEN", "");

            console.log("Token Hilang :", token)
            this.$router.push("/login");
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_LOGIN_ERROR(state, error) {
            state.loginError = error
        },
        SET_ADDRESS(state, address) {
            state.userAddress = address
        },
    },
};
export default auth;