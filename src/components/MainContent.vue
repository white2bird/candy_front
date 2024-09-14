<template>
    <div class="main-content">
        <Login :visible="login_show" @update:visible="showLoginModal"></Login>
         <div>
            <RouterView></RouterView>
         </div>
    </div>
</template>



<script setup>
    import { ref } from 'vue';
    import Login from '@/components/Login.vue';
    const login_show = ref(false);


    const showLoginModal = (obj) => {
        login_show.value = obj;
    }

</script>

<style lang="less" scoped>
.main-content{
    display: flex;
    flex-direction: column;
    background-color: red;
    flex-basis: 1;
    flex-grow: 10;
}

</style>