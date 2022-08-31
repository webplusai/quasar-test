<script setup lang="ts">
interface IProps {
    to: boolean
}
const props = defineProps<IProps>()
</script>

<template>
    <q-btn
        :to="props.to"
        class="menu-item no-decoration bg-white button q-my-sm q-mx-lg q-pa-sm text-center text-grey-10 q-hoverable cursor-pointer full-width"
    >
        <slot></slot>
    </q-btn>
</template>

<style scoped lang="scss">
:deep(a) {
    text-decoration: none !important;
    color: $dark !important;
}
</style>
