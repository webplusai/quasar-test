<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ISkill } from '../../models/Skill'
import { randomUUID } from '../../utils'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()
const q = useQuasar()

const params = route.params
let initState: ISkill
let type: string

if (params.id) {
    initState = store.getters.getSkillById(params.id)
    type = 'updateSkill'
} else {
    initState = { id: randomUUID(), name: null, type: null }
    type = 'addSkill'
}

const skill = ref<ISkill>(initState)
const reset = () => {
    skill.value = Object.assign({}, initState)
}

const submit = () => {
    console.log(skill.value)
    store.commit(type, skill.value)
    q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'fas fa-circle-check',
        message: 'Submitted',
        position: 'top',
    })
    router.push('/skills')
}
</script>

<template>
    <section>
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skills</q-breadcrumbs-el>
            <q-breadcrumbs-el v-if="!params.id">Add Skill</q-breadcrumbs-el>
            <q-breadcrumbs-el v-if="params.id">Edit Skill</q-breadcrumbs-el>
        </q-breadcrumbs>
        <q-card class="text-black q-ma-lg">
            <q-card-section>
                <q-form @submit="submit" @reset="reset">
                    <div class="q-pa-lg">
                        <q-input
                            v-model="skill.name"
                            elevated
                            label="Name"
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    'Please type something',
                            ]"
                        />
                    </div>
                    <div class="q-pa-lg">
                        <q-input
                            v-model="skill.type"
                            elevated
                            label="type"
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    'Please type something',
                            ]"
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
