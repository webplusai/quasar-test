<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { IProfile } from '../../models/Profile'
import { randomUUID } from '../../utils'
import { useRoute, useRouter } from 'vue-router'
import { ISkill } from '../../models/Skill'

const store = useStore()
const route = useRoute()
const router = useRouter()
const q = useQuasar()

const params = route.params
let initState: IProfile
let type: string

if (params.id) {
    initState = store.getters.getProfileById(params.id)
    type = 'updateProfile'
} else {
    initState = {
        id: randomUUID(),
        firstName: null,
        lastName: null,
        skills: [],
    }
    type = 'addProfile'
}

const profile = ref<IProfile>(initState)
const selectedSkills = ref()
const parseSkillToOptions = (skills: ISkill[]) =>
    skills.map((skill: ISkill) => ({ label: skill.name, value: skill }))

if (params.id) {
    selectedSkills.value = parseSkillToOptions(profile.value.skills as ISkill[])
}

const skills = ref(store.getters.getAllSkills)
const getskills = computed(() => parseSkillToOptions(skills.value))

const reset = () => {
    profile.value = Object.assign(
        {},
        { id: randomUUID(), firstName: null, lastName: null },
    )
}

const submit = () => {
    profile.value.skills = (selectedSkills.value || []) .map((sk: any) =>
        store.getters.getAllSkills.find(
            (skill: ISkill) => sk.label === skill.name,
        ),
    )
    store.commit(type, profile.value)
    q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'fas fa-circle-check',
        message: 'Submitted',
        position: 'top',
    })
    router.push('/profiles')
}

const filter = (val: any, update: any) => {
    val = val.toLowerCase()
    skills.value = store.getters.getAllSkills
    if (val === '') {
        skills.value = skills.value.filter((skill: ISkill) =>
            skill.name?.toLowerCase().includes(val),
        )
    }
    update(() => {
        skills.value = skills.value.filter((skill: ISkill) =>
            skill.name?.toLowerCase().includes(val),
        )
    })
}
</script>

<template>
    <section>
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skill Bank</q-breadcrumbs-el>
            <q-breadcrumbs-el>Profiles</q-breadcrumbs-el>
            <q-breadcrumbs-el v-if="!params.id">Add Profile</q-breadcrumbs-el>
            <q-breadcrumbs-el v-if="params.id">Edit Profile</q-breadcrumbs-el>
        </q-breadcrumbs>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <q-form @submit="submit" @reset="reset">
                    <div class="q-pa-lg">
                        <q-input
                            v-model="profile.firstName"
                            elevated
                            label="First Name"
                        />
                    </div>
                    <div class="q-pa-lg">
                        <q-input
                            v-model="profile.lastName"
                            elevated
                            label="Last Name"
                        />
                    </div>
                    <div class="q-pa-lg">
                        <q-select
                            v-model="selectedSkills"
                            :options="getskills"
                            elevated
                            multiple
                            label="Skills"
                            use-input
                            stack-label
                            @filter="filter"
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
        </q-card>
    </section>
</template>

<style scoped lang="scss"></style>
