import { StudentType, student } from './../02/02';


export const addSkill = (st: StudentType, skill: string) => {
const NewSkil = {
    id: new Date().getTime(),
    title:skill
}
st.technologies.push(NewSkil);
}
export const changeIactive = (st: StudentType) => {

st.isActive = !st.isActive
}
export function IsIdentive(s:StudentType, countru: string) {
//    if (countru === s.address.city.countru) {
//     return true;
//    } else {
//     return false
//    }
return countru === s.address.city.countru
}