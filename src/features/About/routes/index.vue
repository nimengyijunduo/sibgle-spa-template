<template>
    <div qys-color="green">{{ props.propName }}</div>
</template>

<script lang="ts" setup>
interface Props {
    propName?: string
}

const props = withDefaults(defineProps<Props>(), {
    propName: 'about 页面',
})
</script>

<style lang="scss" scoped></style>
