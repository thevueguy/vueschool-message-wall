<template>
    <div>
        <p v-if="!$auth.isAuthenticated">
            Please <a href="#" @click="login">log in</a>.
        </p>
        <p v-else>
            Welcome {{ user_name }}! <img :src="user_avatar" style="height: 1.5rem;"> <a href="#" @click="logout"> Logout</a>
        </p>
    </div>
</template>

<script type="text/javascript">
    export default {
        computed: {
            user_name(){
                return this.$auth.user ? this.$auth.user.name : 'back';
            },
            user_avatar(){
                return this.$auth.user ? this.$auth.user.picture : '';
            },
        },
        methods: {
            login(){
                this.$auth.login();
            },
            logout(){
                this.$auth.logout();
            }
        }
    }
</script>