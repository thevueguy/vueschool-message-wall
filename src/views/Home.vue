<template>
  <div class="container mt-4" v-if="!$auth.loading">
    <the-header />
    <message-form @messageSubmitted="pushMessage" />
    <message-list :messages="messages" />
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm.vue";
import TheHeader from "@/components/TheHeader.vue";
import MessageList from "@/components/MessageList.vue";
export default {
  name: "home",
  components: {
    TheHeader,
    MessageForm,
    MessageList,
  },
  data() {
    return {
      messages: ["Lorem ipsum dolor"],
    };
  },
  methods: {
    pushMessage(message) {
      this.messages.push(message);
    },
  },
};
</script>
