import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useRegisterStore = defineStore("registerStore", {
  state: () => ({}),
  getters: {},
  actions: {
    // Función que redirecciona a la vista del Registro de usuario
    newRegister(){
      router.push('/register')
    },
    // Función que envia los datos de Registro de usuario al Backend
    register(user) {
        axios.post("http://localhost:3000/api/users", {
            name: user.name,
            email: user.email,
            password: user.password,
            permission_id: user.permission_id
        }).then((response) => {
          router.push("/admin");
        })
    },
  },
});
