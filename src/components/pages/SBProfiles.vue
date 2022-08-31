<script setup lang="ts">
import { useStore } from 'vuex'
import { h } from 'vue'
import { ISkill } from '../../models/Skill'
import SBTable from '../common/SBTable.vue'
import { IProfile } from '../../models/Profile'
const store = useStore()
const columns = [
    {
        name: 'firstName',
        label: 'First Name',
        field: 'firstName',
        align: 'left',
    },
    {
        name: 'lastName',
        label: 'Last Name',
        field: 'lastName',
        align: 'left',
    },
    {
        name: 'skills',
        label: 'Skills',
        field: 'skills',
        align: 'left',
        format: (val: ISkill[]) =>
            val?.map((el: ISkill) =>
                h(
                    'div',
                    {
                        class: 'fab bg-black text-white text-sm q-pa-sm q-mr-sm rounded-borders',
                    },
                    el.name,
                ),
            ),
    },
    {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
        align: 'right',
    },
]
const data: IProfile[] = store.getters.getAllProfiles
</script>

<template>
    <section>
        <q-breadcrumbs class="q-ma-lg">
            <q-breadcrumbs-el>Skill Bank</q-breadcrumbs-el>
            <q-breadcrumbs-el>Profiles</q-breadcrumbs-el>
        </q-breadcrumbs>
        <SBTable
            key="id"
            :columns="columns"
            empty-label="no data found"
            title="Profiles"
            :data="data"
            model-name="profile"
        >
            <template #action-header>
                <q-btn
                    class="absolute-top-right q-mr-lg text-white"
                    color="secondary"
                    to="profiles/add"
                    >add</q-btn
                >
            </template>
        </SBTable>
    </section>
</template>

<style scoped lang="scss"></style>
