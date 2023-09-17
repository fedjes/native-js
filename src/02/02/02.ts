export type CytiTypeTest = {
    
    title: string
    houses: Array<HouseType>
    gavermentBuildings: Array<GavType>
    cytizensNumber: number
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address :AddresType
}

type AddresType = {
    number?:number
    street: StreetType
}

type StreetType = {
    title: string
}

export type GavType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget:number
    styffCount:number
    address: AddresType
}
