<template>
  <div class="theme-toggle">
    <button @click="toggleTheme">
      {{ currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: localStorage.getItem("theme") || "light",
    };
  },
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", this.currentTheme);
      document.body.className = this.currentTheme;
    },
  },
  mounted() {
    document.body.className = this.currentTheme;
  },
};
</script>

<style scoped>
.theme-toggle button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
