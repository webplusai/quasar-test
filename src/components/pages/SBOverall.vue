<script setup lang="ts">
import { computed, ref } from 'vue'
import { IProfile } from '../../models/Profile'
import { useStore } from 'vuex'

const store = useStore()
const skillName = ref(null)
const profiles = ref<IProfile[]>([])
const reset = () => {
    skillName.value = null
}
const submit = () => {
    profiles.value = store.getters.searchSkills(skillName.value)
}
const getProfiles = computed(() => profiles.value)
</script>

<template>
    <section>
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skill Bank</q-breadcrumbs-el>
            <q-breadcrumbs-el>Overall</q-breadcrumbs-el>
        </q-breadcrumbs>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <q-form @submit="submit" @reset="reset">
                    <div class="q-pa-lg">
                        <q-input
                            v-model="skillName"
                            elevated
                            label="Search skill"
                        />
                    </div>
                    <div class="q-pa-lg">
                        <q-btn label="Submit" type="submit" color="primary" />
                        <q-btn
                            label="Reset"
                            type="reset"
                            color="primary"
                            flat
                            class="q-ml-sm"
                        />
                    </div>
                </q-form>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="text-h5 q-pa-lg">
                    List of Profiles with skill {{ skillName }}
                </div>
                <div
                    v-for="profile in getProfiles"
                    :key="profile.id"
                    class="q-mb-lg"
                >
                    <q-card class="full-width q-pa-lg">
                        <span class="text-h5"
                            >{{ profile.firstName }}
                            {{ profile.lastName }}</span
                        >
                        <q-btn
                            class="text-white absolute-right q-ma-lg"
                            color="secondary"
                            :to="'/profiles/edit/' + profile.id"
                            >Edit</q-btn
                        >
                    </q-card>

                    <q-separator />
                </div>
            </q-card-section>
        </q-card>
    </section>
</template>

<style scoped lang="scss"></style>
