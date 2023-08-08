<template>
  <div class="user-update">
    <h2>Actualizar Usuario</h2>
    <div>
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="userEdit.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="userEdit.email" required />

      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        v-model="userEdit.password"
        required
      />

      <label for="permission_id">Rol:</label>
      <select id="permission_id" v-model="userEdit.permission_id" required>
        <option value="1">Administrador</option>
        <option value="2">Usuario</option>
      </select>

      <button v-on:click="updateUser(userEdit)">Actualizar</button>
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
    ...mapState(useUsersStore, ["userEdit"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["updateUser"])
  },
};
</script>

<style>
.user-update {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 10px;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
