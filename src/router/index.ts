import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/SBHome.vue'
import Overall from '../components/pages/SBOverall.vue'
import Skills from '../components/pages/SBSkills.vue'
import Profiles from '../components/pages/SBProfiles.vue'
import ManageSkill from '../components/pages/SBManageSkill.vue'
import ManageProfile from '../components/pages/SBManageProfile.vue'
import RouterMain from '../components/pages/SBRouterMain.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/overall',
        name: 'overall',
        component: Overall,
    },
    {
        path: '/skills',
        name: 'skills',
        component: RouterMain,
        children: [
            {
                path: '',
                name: 'skills.index',
                component: Skills,
            },
            {
                path: 'add',
                name: 'skills.add',
                component: ManageSkill,
            },
            {
                path: 'edit/:id',
                name: 'skills.edit',
                component: ManageSkill,
            },
        ],
    },
    {
        path: '/profiles',
        name: 'profiles',
        component: RouterMain,
        children: [
            {
                path: '',
                name: 'profiles.index',
                component: Profiles,
            },
            {
                path: 'add',
                name: 'profiles.add',
                component: ManageProfile,
            },
            {
                path: 'edit/:id',
                name: 'profiles.edit',
                component: ManageProfile,
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
