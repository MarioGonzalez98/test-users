<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in getListUsers" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.permission_id == 1 ? "Administrador" : "Usuario" }}</td>
          <td>
            <button class="button-options" v-on:click="editUser(user.id)">
              Editar
            </button>
            <button class="button-options" v-on:click="deleteUser(user.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="cont-button-add">
    <button class="button-add" v-on:click="newRegister()">+</button>
  </div>
</template>

<script>
import { useUsersStore } from "../../stores/usersStore";
import { useRegisterStore } from "../../stores/registerStore"
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useUsersStore, ["getListUsers"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["getUsersList", "editUser", "deleteUser"]),
    ...mapActions(useRegisterStore, ["newRegister"])
  },
  created() {
    this.getUsersList();
  },
};
</script>

<style scoped>
.button-options {
  background-color: #f9f9f9;
  color: black;
  margin: 0 5px;
}
.cont-button-add {
  display: flex;
  justify-content: right;
}
.button-add {
  background-color: #646cff;
  margin-top: 10px;
  color: white;
}
</style>
