import { createStore } from 'vuex'
import { IProfile } from '../models/Profile'
import { ISkill } from '../models/Skill'
import { randomUUID } from '../utils'

interface IAction {
    commit: Function
}

interface State {
    profiles: IProfile[]
    skills: ISkill[]
}

const state: State = {
    profiles: [
        {
            id: randomUUID(),
            firstName: 'alpha',
            lastName: 'alpha',
            skills: [],
        },
    ],
    skills: [
        {
            id: randomUUID(),
            name: 'alpha',
            type: 'alpha',
        },
    ],
}
const mutations = {
    addSkill(state: State, skill: ISkill) {
        state.skills.push(skill)
    },
    updateSkill(state: State, newSkill: ISkill) {
        state.skills = state.skills.map((skill: ISkill) =>
            skill.id === newSkill.id ? newSkill : skill,
        )
    },
    removeSkill(state: State, id: string) {
        state.skills = state.skills.filter((skill: ISkill) => skill.id !== id)
    },
    addProfile(state: State, newProfile: IProfile) {
        state.profiles.push(newProfile as IProfile)
    },
    updateProfile(state: State, newProfile: IProfile) {
        console.log(newProfile)
        state.profiles = state.profiles.map((profile: IProfile) =>
            profile.id === newProfile.id ? newProfile : profile,
        )
    },
    removeProfile(state: State, id: string) {
        state.profiles = state.profiles.filter(
            (profile: IProfile) => profile.id !== id,
        )
    },
}

const actions = {
    addSkill: (action: IAction) => action.commit('addSkill'),
    updateSkill: (action: IAction) => action.commit('updateSkill'),
    removeSkill: (action: IAction) => action.commit('removeSkill'),
    addProfile: (action: IAction) => action.commit('addProfile'),
    updateProfile: (action: IAction) => action.commit('updateProfile'),
    removeProfile: (action: IAction) => action.commit('removeProfile'),
}

const getters = {
    getAllProfiles: (state: State) => state.profiles,
    getAllSkills: (state: State) => state.skills,
    getProfileById: (state: State) => (id: string) =>
        state.profiles.find((profile: IProfile) => profile.id === id),
    getSkillById: (state: State) => (id: string) =>
        state.skills.find((skill: ISkill) => skill.id === id),
    searchSkills: (state: State) => (query: string) =>
        state.profiles.filter(
            (profile: IProfile) =>
                profile.skills &&
                profile.skills.filter((skill: ISkill) =>
                    skill.name?.includes(query),
                ).length > 0,
        ),
}

export default createStore({
    state,
    getters,
    actions,
    mutations,
})
