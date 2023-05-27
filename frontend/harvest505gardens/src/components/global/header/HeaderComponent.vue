<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light header-with-shadow">
    <div class="container">
      <button
        class="navbar-toggler mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link me-5" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link me-5">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link me-5">Contact</router-link>
          </li>
        </ul>
        <div class="logo-container d-flex align-items-center">
          <router-link to="/" class="navbar-brand ml-5">
            <img src="@/assets/logo.png" alt="Farm Logo" class="logo-img" />
          </router-link>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link me-5">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link me-5">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/something" class="nav-link me-5">Something</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script src="./Header.js"></script>

<style src="./Header.css"></style>
  