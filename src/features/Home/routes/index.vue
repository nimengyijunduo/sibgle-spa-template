<template>
    <div qys-color="red">single-spa基座</div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/index'

const store = useCounterStore()

const counter = storeToRefs(store)

const isOpen = ref<Boolean>(false)

const handlePinia = () => {
    store.increment()
}

const handleOpenModal = () => {
    isOpen.value = true
}
const handleCloseModal = () => {
    isOpen.value = false
}
</script>

<style lang="scss" scoped>
.brand {
    width: 100px;
}
</style>
