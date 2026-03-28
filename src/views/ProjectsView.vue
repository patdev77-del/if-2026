<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 3 exercise — fetch your real GitHub repos and display them
// ---------------------------------------------------------------------------

// TODO Day 3: import your useGithub composable
// import { useGithub } from '@/composables/useGithub'
// const { repos, loading, error } = useGithub()

// TODO Day 3: import ProjectCard and use it in the template below
// import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section>
    <h2>Projects</h2>

    <!-- TODO Day 3: show a loading state while repos are being fetched -->
    <!-- <p v-if="loading">Loading…</p> -->

    <!-- TODO Day 3: show an error message if the fetch fails -->
    <!-- <p v-if="error">Something went wrong.</p> -->

    <!-- TODO Day 3: render a ProjectCard for each repo -->
    <div class="projects-grid">
      <!-- <ProjectCard v-for="repo in repos" :key="repo.id" :repo="repo" /> -->
      <p class="placeholder">Your GitHub repos will appear here on Day 3.</p>
    </div>
  </section>
</template>
