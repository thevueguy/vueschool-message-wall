<template>
  <div class="mt-4">
    <h2>Message Wall</h2>
    <div class="card mb-4" v-for="(message, index) in messages" :key="index">
      <div class="card-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>
