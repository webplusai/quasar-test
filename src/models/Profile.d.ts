import { ISkill } from './Skill'

interface IProfile {
    id: string | null
    firstName: string | null
    lastName: string | null
    skills?: ISkill[]
}

export { IProfile }
