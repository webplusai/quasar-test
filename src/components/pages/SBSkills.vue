<script setup lang="ts">
import { useStore } from 'vuex'
import { ISkill } from '../../models/Skill'
import SBTable from '../common/SBTable.vue'
const store = useStore()
const columns = [
    {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
    },
    {
        name: 'type',
        label: 'Type',
        field: 'type',
        align: 'left',
    },
    {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
        align: 'right',
    },
]

const data: ISkill[] = store.getters.getAllSkills
</script>

<template>
    <section>
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skill Bank</q-breadcrumbs-el>
            <q-breadcrumbs-el>Skills</q-breadcrumbs-el>
        </q-breadcrumbs>

        <SBTable
            key="id"
            :columns="columns"
            :data="data"
            empty-label="no data found"
            title="Skills"
            model-name="skill"
        >
            <template #action-header>
                <q-btn
                    class="absolute-top-right q-mr-lg text-white"
                    color="secondary"
                    to="skills/add"
                    >add</q-btn
                >
            </template>
        </SBTable>
    </section>
</template>

<style scoped lang="scss"></style>
