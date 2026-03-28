<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 2 exercise: wire up the dark mode toggle using your useDarkMode composable
// ---------------------------------------------------------------------------

// TODO Day 2: import useDarkMode from '@/composables/useDarkMode'
// const { isDark, toggle } = useDarkMode()
</script>

<template>
  <header class="navbar">
    <nav class="navbar__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- TODO Day 2: replace this button with a working dark mode toggle -->
    <button class="toggle" aria-label="Toggle dark mode">☀ / ☾</button>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>
