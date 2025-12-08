<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  avatarUrl: {
    type: String,
    default: ''
  },
  // Add other props like email, social links, etc.
});
</script>

<template>
  <div class="team-card">
    <div class="avatar-wrapper">
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        :alt="`Avatar of ${name}`"
        class="team-avatar"
      />
    </div>
    <h3 class="team-name">{{ name }}</h3>
    <p class="team-title">{{ title }}</p>
    <div class="team-content">
      <slot></slot>
    </div>
    <div class="team-social">
      <slot name="social-links"></slot>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-1);
}

.avatar-wrapper {
  margin-bottom: 1rem;
}

.team-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
}

.team-name {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.25rem;
}

.team-title {
  color: var(--vp-c-text-2);
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 400;
}

.team-content, .team-social {
  width: 100%;
}
</style>