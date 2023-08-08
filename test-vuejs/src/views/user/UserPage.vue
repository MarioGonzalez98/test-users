<template>
  <div class="user-info">
    <h2>Información del Usuario</h2>
    <div class="user-data">
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Contraseña:</strong> ******</p>
      <p><strong>Rol:</strong> {{ user.permission_id == 1 ? 'Administrador' : 'Usuario' }}</p>
    </div>
    <div class="cont-button-edit">
      <button class="button-edit" v-on:click="editUser(user.id)">Editar</button>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "../../stores/usersStore.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["getUserById", "editUser"]),
  },
  created() {
  },
};
</script>

<style scoped>
.user-info {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.user-data {
  margin-top: 10px;
}

.user-data p {
  margin: 5px 0;
}
p {
  text-align: left;
}
.cont-button-edit{
  display: flex;
  justify-content: right;
}
.button-edit {
  background-color: #646cff;
  margin-top: 10px;
  color: white;
}
</style>
