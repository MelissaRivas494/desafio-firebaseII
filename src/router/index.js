import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from "firebase/auth";

const requireAuth = (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    next(); 
  } else {
    next('/signup'); 
  }
};

const routes = [
  {
    path: '/signup',
    component: () => import('../views/SignUpView.vue') 
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue') 
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'), 
    beforeEnter: requireAuth
  },

  {
    path: '/',
    redirect: '/signup'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
