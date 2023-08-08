import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [],
    user: [],
    userEdit: [],
  }),
  getters: {
    getListUsers(state) {
      return state.users;
    },
    getUserEdit(state) {
      return state.userEdit;
    },
    getUser(state){
      return state.user;
    }
  },
  actions: {
    // Función que obtiene un Usuario del Backend a traves de su id
    getUserById(id) {
      axios.get("http://localhost:3000/api/users/" + id).then((response) => {
        this.user = response.data;
      });
    },
    // Función que obtiene lista completa de Usuarios del Backend
    getUsersList() {
      axios.get("http://localhost:3000/api/users").then((response) => {
        this.users = response.data;
      });
    },
    // Función que obtiene datos de un usuario a traves de su id y redirecciona a la vista de Edicion de usuario
    editUser(id) {
      axios.get("http://localhost:3000/api/users/" + id).then((response) => {
        this.userEdit = response.data;
        router.push("/update/user");
      });
    },
    // Función que obtiene los datos editados del usuario y los envía al Backend
    updateUser(user) {
      axios
        .patch("http://localhost:3000/api/users/" + user.id, {
          name: user.name,
          email: user.email,
          password: user.password,
          permission_id: user.permission_id,
        })
        .then(() => {
          router.push("/admin");
        });
    },
    // Función que envía el id de un usuario para su eliminación 
    deleteUser(id) {
      axios
        .delete("http://localhost:3000/api/users/" + id)
        .then(() => {
          this.getUsersList()
        });
    },
  },
});
