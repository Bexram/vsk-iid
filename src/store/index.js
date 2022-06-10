import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        url: null,
        server: 'https://apivsk.bexram.online',
        serverNoSlash: 'https://apivsk.bexram.online',
    },
    mutations: {
        SET_URL(state, url) {
            state.url = url;
        }
    },
    actions: {
        BUY_POLICY({commit}, data) {
            return axios({
                method: "POST",
                url: `https://api-creatum.bexram.online/iid/buy/`,
                data: data
            })
                .then((response) => {
                    commit("SET_URL")
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        }

    },
    getters: {}
})

export default store
