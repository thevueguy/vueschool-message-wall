<template>
  <p v-if="$auth.isAuthenticated">
    Welcome {{ $auth.user.name }}!
    <img style="height: 2rem;" :src="$auth.user.picture" />
    <a href="#" class="ml-1" @click.stop.prevent="logout">Logout</a>
  </p>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>
