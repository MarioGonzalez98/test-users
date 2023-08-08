<template>
  <div class="login-container">
    <h2 class="login-title">Inicio de Sesión</h2>
    <div class="login-form">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="text" id="email" class="form-input" v-model="user.email" />
        <h5 class="error">{{ validationEmail }}</h5>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          id="password"
          class="form-input"
          v-model="user.password"
        />
        <h5 class="error">{{ validationPassword }}</h5>
      </div>
      <div class="form-group">
        <label class="form-label" for="permission_id">Rol:</label>
        <select id="permission_id" class="form-input" v-model="user.permission_id">
          <option value="1">Administrador</option>
          <option value="2">Usuario</option>
        </select>
      </div>
      <button type="submit" class="form-button" v-on:click="login(user)">
        Iniciar Sesión
      </button>
      <h5 class="error">{{ validation }}</h5>
      <hr />
      <div>
        <button class="form-button-new" v-on:click="newRegister()">
          Crear usuario nuevo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../../stores/loginStore.js";
import { useRegisterStore } from "../../stores/registerStore";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      user: {
        email: "mario1@gmail.com",
        password: "123",
        permission_id: 2,
      },
      validationEmail: "",
      validationPassword: "",
    };
  },
  computed: {
    ...mapState(useLoginStore, ['validation'])
  },
  methods: {
    ...mapActions(useLoginStore, ["login"]),
    ...mapActions(useRegisterStore, ["newRegister"]),
    // login() {
    //   if (this.email == "") {
    //     this.validationEmail = "*El campo email está vacío";
    //   } else {
    //     this.validationEmail = "";
    //   }
    //   if (this.password == "") {
    //     this.validationPassword = "*El campo password está vacío";
    //   } else {
    //     this.validationPassword = "";
    //   }
    // },
  },
};
</script>

<style scoped>
.login-container {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  height: 100vh;
  margin: 0;
}

.login-form {
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333333;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-size: 14px;
  color: #666666;
  margin-bottom: 5px;
}

.form-input {
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
}

.form-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-bottom: 10px;
}
.form-button-new {
  background-color: #1b9945;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 10px;
}

.form-button:hover {
  background-color: #0056b3;
}
.error {
  color: rgb(206, 21, 21);
  margin: 10px;
}
label {
  display: block;
  margin-top: 10px;
}
</style>
