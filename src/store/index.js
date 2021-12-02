import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'https://localhost:44341/api',
    productos: [],
    producto: {
      nombre: '',
      categoria: '',
      cantidad: 0,
      precio: 0,
      descripcion: ''
    }
  },
  getters: {
    ObtenerProductos(state) {
      return state.productos
    },
    ObtenerProducto(state) {
      return state.producto
    }
  },
  mutations: {
    SET_PRODUCTOS(state, payload) {
      state.productos = payload
    },
    SET_PRODUCTO(state, payload) {
      state.producto = payload
    }
  },
  actions: {
    ObtenerProductos({ commit, state }) {
      return axios
        .get(`${state.apiUrl}/Producto`)
        .then((data) => {
          commit('SET_PRODUCTOS', data.data)
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    AgregarProducto({ state }, payload) {
      return axios
        .post(`${state.apiUrl}/Producto`, payload)
        .then((data) => {
          return data.data
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    BorrarProducto({ state, commit }, id) {
      return axios
        .delete(`${state.apiUrl}/Producto/${id}`)
        .then(() => {
          const newArray = []
          state.productos.forEach((item) => {
            if (id !== item.id) {
              newArray.push(item)
            }
          })
          commit('SET_PRODUCTOS', newArray)
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    ActualizarProducto({ state }, payload) {
      return axios
        .put(`${state.apiUrl}/Producto`, payload)
        .then((data) => {
          return data.data
        })
        .catch((error) => {
          console.log({ error })
          return { error }
        })
    },
    SetProducto({ commit }, payload) {
      commit('SET_PRODUCTO', payload)
    }
  }
})
