<script setup lang="ts">
import { reactive } from 'vue'
import type { Register } from '@/models/RegisterModel.ts'

const register = reactive<Register>({
  email: '',
  password: '',
  passwordConfirm: ''
})

const handleSubmit = () => {
    //print register data to console
  console.log(register)
  // clean the form data
  register.email = ''
  register.password = ''
  register.passwordConfirm = ''
}

</script>
<template>
  <div class="form signup-form" @submit.prevent="handleSubmit">
    <form id="register-form">
      <h3>Registrarse</h3>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        autocomplete="false"
        placeholder="mail@mail.com"
        v-model="register.email"
      />
      <label for="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        v-model="register.password"
      />
      <label for="confirm-password">Confirmar Contraseña</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirmar Password"
        v-model="register.passwordConfirm"
      />
      <input type="submit" value="Registrarse" />
    </form>
  </div>
</template>

<style scoped>
</style>
