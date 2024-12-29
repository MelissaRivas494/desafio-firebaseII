<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const successMessage = ref('');

const signUp = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    successMessage.value = "Cuenta creada con éxito. Redirigiendo a Home...";

    setTimeout(() => {
      router.push('/home');
    }, 2000);

  } catch (error) {
    console.error(error.message);
    successMessage.value = '';
  }
};
</script>

<template>
  <div>
    <h1>Registrate</h1>
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>



<style scoped>
.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

</style>