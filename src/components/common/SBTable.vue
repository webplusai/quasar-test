<script setup lang="ts">
import { IColumn } from '../../models/Types'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

interface IProps {
    columns: IColumn[]
    data: unknown[]
    emptyLabel: string
    title?: string
    modelName?: string
}

const props = defineProps<IProps>()
const store = useStore()
const router = useRouter()
const filter = ref('')
const data = ref(props.data)

const editRow = (data: any) => {
    if (props.modelName && props.modelName === 'skill') {
        router.push({ name: 'skills.edit', params: { id: data.row.id } })
    } else if (props.modelName && props.modelName === 'profile') {
        router.push({ name: 'profiles.edit', params: { id: data.row.id } })
    }
}

const deleteRow = (tdata: any) => {
    if (props.modelName && props.modelName === 'skill') {
        store.commit('removeSkill', tdata.row.id)
        data.value = store.getters.getAllSkills
    } else if (props.modelName && props.modelName === 'profile') {
        store.commit('removeProfile', tdata.row.id)
        data.value = store.getters.getAllProfiles
    }
}

if (props.modelName && props.modelName === 'skill') {
    data.value = store.getters.getAllSkills
} else if (props.modelName && props.modelName === 'profile') {
    data.value = store.getters.getAllProfiles
}
const getData = computed(() => data.value)
</script>

<template>
    <q-card>
        <q-card-section v-if="props.title">
            <div class="text-h5">
                {{ props.title }}
            </div>
            <div><slot name="action-header"></slot></div>
        </q-card-section>
        <q-card-section>
            <q-table
                :columns="props.columns"
                :no-data-label="props.emptyLabel"
                :rows="getData"
                row-key="name"
                virtual-scroll
                :filter="filter"
            >
                <template #top-right>
                    <q-input
                        v-model="filter"
                        borderless
                        dense
                        debounce="300"
                        placeholder="Search"
                    >
                        <template #append>
                            <q-icon name="fas fa-magnifying-glass" />
                        </template>
                    </q-input>
                </template>
                <template #body-cell-actions="prop">
                    <q-td :props="prop">
                        <q-btn
                            dense
                            round
                            flat
                            color="grey"
                            icon="fas fa-pen-to-square"
                            @click="editRow(prop)"
                        ></q-btn>
                        <q-btn
                            dense
                            round
                            flat
                            color="grey"
                            icon="fas fa-trash-can"
                            @click="deleteRow(prop)"
                        ></q-btn>
                    </q-td>
                </template>
            </q-table>
        </q-card-section>
    </q-card>
</template>

<style scoped lang="scss"></style>
