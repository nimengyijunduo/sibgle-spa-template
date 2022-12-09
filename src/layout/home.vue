<template>
    <el-container class="layout-container-demo">
        <el-header style="text-align: right; font-size: 12px">
            <div class="toolbar">
                <el-dropdown>
                    <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>欢迎光临</span>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-scrollbar>
                    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><icon-menu /></el-icon>vue 应用
                            </template>
                            <el-menu-item index="1-1" @click="handleLoadApp('sub-vue')">
                                导航1
                            </el-menu-item>
                            <el-menu-item index="1-1">导航2</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon><Setting /></el-icon>react 应用
                            </template>
                            <el-menu-item index="1-1" @click="handleLoadApp('sub-react')">
                                导航1
                            </el-menu-item>
                            <el-menu-item index="1-1">导航2</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>
                <el-scrollbar>
                    <div id="child-app"></div>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const router = useRouter()

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleLoadApp = (value: string) => {
    router.push(value)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
    border-right: none;
}
.layout-container-demo .el-main {
    padding: 0;
}
.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
