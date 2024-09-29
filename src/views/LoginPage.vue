<script setup lang="ts">
import { reactive } from 'vue'
import type { User } from '@/models/UserModel.ts'
import type { Register } from '@/models/RegisterModel.ts'
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const user = reactive<User>({
  login: '',
  password: ''
})
const register = reactive<Register>({
  email: '',
  password: '',
  passwordConfirm: ''
})

// Reactives vars
const isLoginActive = ref(false)
const isRegisterActive = ref(true)

// DOM's References
let wrapper: HTMLElement | null = null
let formBox: HTMLElement | null = null

onMounted(() => {
  wrapper = document.querySelector('.wrapper')
  formBox = document.querySelector('.form-bx')
})

// Show Register Form
const activeRegister = () => {
  if (isLoginActive.value) {
    isRegisterActive.value = true
    isLoginActive.value = false
    formBox?.classList.add('active')
    wrapper?.classList.add('active')
  } else {
    activeLogin()
  }
}

// Show Login Form
const activeLogin = () => {
  if (isRegisterActive.value) {
    isLoginActive.value = true
    isRegisterActive.value = false
    formBox?.classList.remove('active')
    wrapper?.classList.remove('active')
  } else {
    activeRegister()
  }
}
</script>

<template>
  <div :class="{ active: isRegisterActive }" class="wrapper">
    <div class="container">
      <div class="blue-bg">
        <div class="bx sign-in">
          <h2>Ya tienes una cuenta?</h2>
          <button @click="activeLogin" class="signin-btn">Ingresar</button>
        </div>
        <div class="bx sign-up">
          <h2>Aun no tienes una cuenta?</h2>
          <button @click="activeRegister" class="signup-btn">Registrate</button>
        </div>
      </div>

      <!-- CAJA DEL FORMULARIO -->
      <div :class="{ active: isRegisterActive }" class="form-bx">
        <div class="form signin-form">
          <!-- LOGIN -->
          <form>
            <h3>Ingresar</h3>
            <input type="text" placeholder="mail@mail.com" v-model="user.login" />
            <input type="password" placeholder="Password" v-model="user.password" />
            <input type="submit" value="Ingresar" />
            <a href="#" class="forgot">Olvide Mi Contraseña</a>
          </form>
        </div>
        <div class="form signup-form">
          <!-- REGISTER -->
          <form id="register-form">
            <!-- titulo del form -->
            <h3>Registrarse</h3>
            <!-- email -->
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="false"
              placeholder="mail@mail.com"
              v-model="register.email"
            />

            <!-- contrasena -->
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              v-model="register.password"
            />

            <!-- confirmar contrasena -->
            <label for="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirmar Password"
              v-model="register.passwordConfirm"
            />

            <!-- boton para envio del formulario (submit) -->
            <input type="submit" value="Registrarse" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--primary);
  transition: 0.5s;
}

.wrapper.active {
  background: var(--primary-darker);
}

.container {
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;
}

.blue-bg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.blue-bg .bx {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.blue-bg .bx h2 {
  color: var(--white);
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.blue-bg .bx button {
  cursor: pointer;
  padding: 10px 20px;
  background: var(--white);
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 15px;
}

.form-bx {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--white);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;
  border-radius: 15px;
}

.form-bx.active {
  left: 50%;
}

.form-bx .signin-form {
  transition-delay: 0.25s;
}

.form-bx.active .signin-form {
  left: -100%;
  transition-delay: 0s;
}

.form-bx .signup-form {
  left: 100% !important;
}

.form-bx.active .signup-form {
  left: 0 !important;
}

.form-bx .form {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
}

/* formularios */
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

form h3 {
  font-size: 1.5em;
  font-weight: 400;
  color: var(--black);
  margin-bottom: 20px;
}

form label {
  font-size: 0.9em;
  padding: 0 8px;
  opacity: 0.5;
}

form input {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

form input[type='submit'] {
  border: none;
  color: var(--white);
  background: var(--primary);
  max-width: 100px;
  cursor: pointer;
}

form .forgot {
  color: var(--black);
}

/* responsiva */
@media (max-width: 991px) {
  .container {
    margin: 10px;
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .blue-bg {
    top: 0;
    transform: translateY(0%);
    height: 100%;
  }

  .form-bx {
    width: 100%;
    height: 500px;
    box-shadow: none;
  }

  .blue-bg .bx {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }

  .bx.sign-in {
    top: 0;
  }

  .form-bx.active {
    left: 0;
    top: 150px;
  }
}
</style>
