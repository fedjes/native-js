import { GavType, HouseType } from "../../02/02/02";

export function getStreetsOfGavBuild (build:Array<GavType> ) {
    return build.map(b=> b.address.street.title)
}

export const getGreetMessage = (hous:Array<HouseType>) => {
return hous.map(h=>`hello people from ${h.address.street.title}`)
}