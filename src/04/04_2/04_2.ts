import { CytiTypeTest, GavType, HouseType } from "../../02/02/02";

export const demolishHousesOnTheStreet = (cyti: CytiTypeTest, nameStr: string) => {
    // cyti.houses = cyti.houses.filter(h=> !(h.address.street.title === nameStr))
    cyti.houses = cyti.houses.filter(h=> h.address.street.title !== nameStr)
}

export function getBuildingsStyffCount(build:Array<GavType>,count:number) {
  return  build.filter(b=>b.styffCount > count)
}