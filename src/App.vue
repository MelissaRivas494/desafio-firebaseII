<template>
  <div>
    <nav>
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: green;
}
</style>
