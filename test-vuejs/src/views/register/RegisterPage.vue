<template>
  <div class="user-registration">
    <h2>Registro de Usuarios</h2>
    <div>
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="userData.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="userData.email" required />

      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        v-model="userData.password"
        required
      />

      <label for="role">Rol:</label>
      <select id="role" v-model="userData.permission_id" required>
        <option value="1">Administrador</option>
        <option value="2">Usuario</option>
      </select>

      <button v-on:click="register(userData)">Registrar</button>
    </div>
  </div>
</template>

<script>
import { useRegisterStore } from "../../stores/registerStore.js";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
        permission_id: 1,
      },
    };
  },
  methods: {
    ...mapActions(useRegisterStore, ['register'])
  },
};
</script>

<style>
.user-registration {
  max-width: 400px;
  margin: 0 auto;
  padding: 65px;
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
