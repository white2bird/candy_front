<template>
    <div class="main-content">
        <Login :visible="login_show" @update:visible="showLoginModal"></Login>
         <div>
            <RouterView></RouterView>
         </div>
    </div>
</template>



<script setup>
    import { ref,inject } from 'vue';
    import Login from '@/components/Login.vue';
    
    const login_show = ref(false);
    const $request = inject('$request');

    const showLoginModal = (obj) => {
        login_show.value = obj;
    }

    const init_request = () => {
        $request.get("/user/info", {
            headers: {
                'token': localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res)
            })
    }
    init_request();

</script>

<style lang="less" scoped>
.main-content{
    display: flex;
    flex-direction: column;
    flex-basis: 1;
    flex-grow: 10;
}

</style>