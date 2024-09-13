<template>
    <div class="container">
        <MainHeader></MainHeader>
        <MainContent></MainContent>
        <MainFooter></MainFooter>   
    </div>
    
</template>

<script setup>
    import MainHeader from '@/components/MainHeader.vue';
    import MainContent from '@/components/MainContent.vue';
    import MainFooter from '@/components/MainFooter.vue';

</script>

<style lang="less" scoped>
body{
    margin: 0;
}
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    flex-basis: 1;
    flex-grow: 10;

}

</style>