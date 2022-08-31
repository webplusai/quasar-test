<script setup lang="ts">
import Navigation from './SBNavigation.vue'
</script>

<template>
    <q-layout view="hHh lpR fFf" class="main-layout">
        <Navigation />
        <slot></slot>
        <q-footer class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <div>Copyright &copy; 2022</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<style scoped lang="scss"></style>
