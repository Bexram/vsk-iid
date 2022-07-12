import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        url: null,
        policy: null,

    },
    mutations: {
        SET_URL(state, url) {
            state.url = url;
        },
        SET_POLICY_OBJECT(state, policy) {
            state.policy = policy;
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
        },
        BUY_READY_POLICY({commit}, data) {
            return axios({
                method: "POST",
                url: `https://api-creatum.bexram.online/iid/buyreadypolicy/`,
                data: data
            })
                .then((response) => {
                    commit("SET_URL")
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },
        GET_DRAFT({commit}, data) {
            return axios({
                method: "POST",
                url: `https://api-creatum.bexram.online/iid/getdraft/`,
                data: data
            })
                .then((response) => {
                    commit("SET_POLICY_OBJECT")
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },
        SEND_MAIL({commit}, data) {
            return axios({
                method: "POST",
                url: `https://api-creatum.bexram.online/iid/mail/`,
                data: data
            })
                .then((response) => {
                    commit("SET_URL")
                    return response;
                })
                .catch((error) => {
                    return error;
                });
        },

    },


    getters: {
        GET_POLICY_OBJECT(state) {
            return state.policy
        }
    }
})

export default store
