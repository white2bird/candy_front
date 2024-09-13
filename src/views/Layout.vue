<template>
    <div class="container_layout">
        <Info></Info>
        <InfoBlank></InfoBlank>
        <Home></Home>
        <PlaceHolder></PlaceHolder>
    </div>
    
</template>

<script setup>
    import Info from '@/components/Info.vue';
    import Home from '@/views/Home.vue';
    import InfoBlank from '@/components/InfoBlank.vue';
    import PlaceHolder from '@/components/PlaceHolder.vue';

</script>

<style lang="less" scoped>
body{
    margin: 0;
}
.container_layout{
    display: flex;
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;

}

</style>