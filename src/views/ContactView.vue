<script setup lang="ts">
// ---------------------------------------------------------------------------
// Day 3 OPTIONAL exercise — build a contact form with v-model + validation
// ---------------------------------------------------------------------------

// TODO Day 3 (optional): add refs for name, email, message
// TODO Day 3 (optional): add a computed property for form validity
// TODO Day 3 (optional): handle submit — show a success message
</script>

<template>
  <section>
    <h2>Contact</h2>

    <!-- TODO Day 3 (optional): build out this form with v-model on each field -->
    <form class="contact-form" @submit.prevent>
      <label>
        Name
        <input type="text" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" placeholder="your@email.com" />
      </label>
      <label>
        Message
        <textarea rows="5" placeholder="Say hello…" />
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
</template>
