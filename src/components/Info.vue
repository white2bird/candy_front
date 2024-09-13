<template>
    <div class="info">
        <div class="Info-empty">
            this is info
        </div>
        <div class="Info-my">
            <el-button type="primary" round>Primary</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.info {
    display: flex;
    flex-basis: 200px;
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