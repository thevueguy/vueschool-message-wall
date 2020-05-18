<template>
  <div class="mt-4">
    <form @submit.stop.prevent="submit" v-if="$auth.isAuthenticated">
      <textarea
        class="form-control"
        v-model="message"
        placeholder="Write a message"
      ></textarea>
      <button type="submit" class="form-control btn-primary mt-2">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    submit() {
      if (this.message === "") return;
      this.$emit("messageSubmitted", this.message);
      this.message = "";
    },
    login() {
      this.$auth.login();
    },
  },
};
</script>
