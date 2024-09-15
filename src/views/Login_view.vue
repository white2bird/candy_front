<template>
    <Login :visible="login_show" @update:visible = "closeLogin"></Login>
</template>


<script setup>
    import Login from '@/components/Login.vue'
    import { ref } from 'vue';

    const login_show = ref(true);


    const closeLogin = (obj) => {
        login_show.value = obj
    }
</script>