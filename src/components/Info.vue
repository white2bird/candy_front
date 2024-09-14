<template>
    <div class="info">
        <div class="Info-empty">
            this is info
        </div>
        <div class="Info-my">
            <el-button type="primary" round @click="showLoginModal(true)">{{ loginButtonName }}</el-button>
            <Login :visible="login_show" @update:visible="showLoginModal"></Login>
        </div>
    </div>
</template>

<script setup>
    import { ref,computed } from 'vue';
    import Login from '@/components/Login.vue';
    import { useStore } from 'vuex';
    const store =  useStore();
    const login_show = ref(false);
    const loginButtonName = computed(() => store.state.loginButtonName)
    


    const showLoginModal = (val) => {
        login_show.value = val;
    }

</script>

<style lang="less" scoped>
.info {
    display: flex;
    flex-basis: 150px;
    flex-direction: column;
}
.Info-empty {
    display: flex;
    flex-grow: 1;
    min-height: 100px;
}
.Info-my{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    min-height: 100px;
    background-color: orange;
}
</style>