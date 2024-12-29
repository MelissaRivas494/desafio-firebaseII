<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const logIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);

    router.push('/home');
  } catch (error) {
    console.error(error.message);
  }
};
</script>


<template>
  <div>
    <h1>Inicia Sesión</h1>
    <form @submit.prevent="logIn">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

