<script setup lang="ts">
import { reactive } from 'vue'
import type { User } from '@/models/UserModel.ts'

const user = reactive<User>({
  login: '',
  password: ''
})

</script>

<template>
  <div class="form signin-form" >
    <form>
      <h3>Ingresar</h3>
      <input type="text" placeholder="mail@mail.com" v-model="user.login" />
      <input type="password" placeholder="Password" v-model="user.password" />
      <input type="submit" value="Ingresar" />
      <a href="#" class="forgot">Olvide Mi Contraseña</a>
    </form>
  </div>
</template>

<style scoped></style>
