import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useUsersStore } from "./usersStore.js";

export const useLoginStore = defineStore("loginStore", {
  state: () => ({
    validation: "",
  }),
  getters: {},
  actions: {
    // Funcion para login de usuario. Se envian 3 parametros a validación (email, password, permission_id)
    login(user) {
      axios
        .post("http://localhost:3000/api/login", {
          email: user.email,
          password: user.password,
          permission_id: user.permission_id,
        })
        .then((response) => {
          if (!response.data.error) {
            if (user.permission_id == 1) {
              router.push("/admin");
            } else {
              const users = useUsersStore();
              users.getUserById(response.data.id);
              router.push("/users");
            }
          }
          if (response.data.error == 1) {
            this.validation =
              "**Las credenciales no corresponden a los registros**";
          }
          if ((response.data.error = 2)) {
            this.validation = "**No existe este usuario en los registros**";
          }
        });
    },
  },
});
