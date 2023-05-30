<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light header-with-shadow">
    <div class="container-fluid d-flex">
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
        <div class="logo-container">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/logo3-svg.svg" alt="Farm Logo" class="logo-img" width="650" height="200" />
          </router-link>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/something" class="nav-link">Something</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script src="./Header.js"></script>

<style src="./Header.css"></style>
  