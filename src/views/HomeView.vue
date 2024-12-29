<script setup>
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    router.push('/login');
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<template>
  <div class="home-container">
    <h1>Home</h1>
    <p>Bienvenido, usuario autenticado.</p>
    <img src="../assets/celebrate.jpg" width="200px" alt="celebrate" />
    <button @click="logout" class="logout-button">Log Out</button>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.logout-button {
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
}


</style>
