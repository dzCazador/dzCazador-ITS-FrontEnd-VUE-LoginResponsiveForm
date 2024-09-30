<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactives vars
const isLoginActive = ref(true)
const isRegisterActive = ref(false)

// DOM's References
let wrapper: HTMLElement | null = null
let formBox: HTMLElement | null = null

onMounted(() => {
  wrapper = document.querySelector('.wrapper')
  formBox = document.querySelector('.form-bx')
  router.push({ name: 'login' })
})

// Show Register Form
const activeRegister = () => {
  if (isLoginActive.value) {
    isRegisterActive.value = true
    isLoginActive.value = false
    formBox.classList.add('active')
    wrapper.classList.add('active')
    router.push({ name: 'register' })
  } else {
    activeLogin()
  }
}

// Show Login Form
const activeLogin = () => {
  if (isRegisterActive.value) {
    isLoginActive.value = true
    isRegisterActive.value = false
    formBox.classList.remove('active')
    wrapper.classList.remove('active')
    router.push({ name: 'login' })
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
          <button v-on:click="activeLogin" class="signin-btn">Ingresar</button>
        </div>
        <div class="bx sign-up">
          <h2>Aun no tienes una cuenta?</h2>
          <button v-on:click="activeRegister" class="signup-btn">Registrate</button>
        </div>
      </div>

      <!-- CAJA DEL FORMULARIO -->
      <div class="form-bx">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
