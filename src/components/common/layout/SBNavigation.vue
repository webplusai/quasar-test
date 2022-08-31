<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from './SBMenuItem.vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
    <section>
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar id="navigation-desktop">
                <q-btn
                    dense
                    flat
                    round
                    icon="fas fa-bars"
                    class="md-hide lg-hide toggle-menu-btn"
                    @click="toggleLeftDrawer"
                />
                <q-toolbar-title>
                    <q-btn to="/" flat>Skill Bank</q-btn>
                </q-toolbar-title>
                <q-tabs align="left" class="xs-hide sm-hide menu">
                    <q-route-tab to="/" label="Home" />
                    <q-route-tab to="/overall" label="Overall" />
                    <q-route-tab to="/skills" label="Skills" />
                    <q-route-tab to="/profiles" label="Profiles" />
                </q-tabs>
            </q-toolbar>
        </q-header>
        <q-drawer
            id="navigation-mobile"
            v-model="leftDrawerOpen"
            class="md-hide lg-hide"
            side="left"
            overlay
            behavior="mobile"
            elevated
        >
            <div class="q-pa-sm bg-secondary full-height text-white">
                <q-toolbar>
                    <q-toolbar-title>
                        <q-btn to="/" flat>Skill Bank</q-btn>
                    </q-toolbar-title>
                    <q-btn
                        dense
                        flat
                        round
                        icon="fas fa-xmark"
                        @click="toggleLeftDrawer"
                    />
                </q-toolbar>
                <MenuItem to="/"> Home </MenuItem>
                <MenuItem to="/overall"> Overall </MenuItem>
                <MenuItem to="/skills"> Skills </MenuItem>
                <MenuItem to="/profiles"> Profiles </MenuItem>
            </div>
        </q-drawer>
    </section>
</template>

<style scoped lang="scss"></style>
