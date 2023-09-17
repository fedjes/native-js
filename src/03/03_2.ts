import { CytiTypeTest, GavType, HouseType } from "../02/02/02"




export function addMoneyToBudget(build: GavType, budget: number) {
    return build.budget = build.budget + budget
}

// export const demolishHousesOnTheStreet = (c: CytiTypeTest, nameStr: string) => {

// }

export const repairHous = (h: HouseType) => {
h.repaired = !h.repaired;
}

export function toFireStyff(f:GavType, StCoun: number ) {
    f.styffCount -= StCoun;
}

export const toHireStyff = (f:GavType, StCoun: number) => {
f.styffCount += StCoun
}

export const createMessage = (props: CytiTypeTest) => {

    // return 'hello ' + cyti.title +' cytizens i wont to be free'
    return `hello ${props.title} cytizens i wont to be free`

}