<template>
    <div v-if="visible" class="login-modal">
        <div class="modal-content">
            <h2>Login</h2>
            <!-- 登录表单内容 -->
            <el-row class="login-input">
                <el-col>
                    <el-form-item label="账号:" prop="enterpriseName">
                        <el-input type="text" placeholder="请输入" :disabled="false" v-model="username"></el-input>
                    </el-form-item>
                </el-col>
                <el-col>
                    <el-form-item label="密码:">
                        <el-input type="text" placeholder="请输入" :disabled="false" v-model="password"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <div class="login-button">
                <ElButton type="primary" @click="handleLogin">Login</ElButton>
                <ElButton type="primary" @click="handleClose">Close</ElButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElInput } from 'element-plus';
import { ref, getCurrentInstance, inject } from 'vue'
import { useStore } from 'vuex'

const { proxy } = getCurrentInstance()
const $request = inject('$request')
const store = useStore()

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['update:visible'])

const username = ref('')
const password = ref('')

const handleLogin = () => {
    console.log('Login:', username.value, password.value)
    $request.post("/user/login",
        {
            nickname: username.value,
            password: password.value
        })
        .then(res => {
            console.log(res)
            store.dispatch('updateUsername', "退出")
            localStorage.setItem("token", res.token)
        })
    handleClose()


}

const handleClose = () => {
    // 通知父组件关闭登录框
    username.value = ''
    password.value = ''
    emit('update:visible', false)
}
</script>

<style scoped>
.login-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 10px;
    border-radius: 5px;

}

.login-input {
    display: flex;
    flex-direction: column;

}

.login-button {
    display: flex;
    flex-basis: 50px;
    margin: 10px;
    justify-content: space-around;
}
</style>
