<template>
  <div class="container mt-4" v-if="!$auth.loading">
    <message-header />
    <message-form @messageSubmitted="pushMessage" />
    <message-list :messages="messages" />
  </div>
  <div v-else>
    Loading auth...
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm.vue";
import MessageHeader from "@/components/MessageHeader.vue";
import MessageList from "@/components/MessageList.vue";
export default {
  name: "home",
  components: {
    MessageHeader,
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
