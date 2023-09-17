import { CytiTypeTest } from "../../02/02/02";
import { demolishHousesOnTheStreet, getBuildingsStyffCount } from "./04_2";


let cyti: CytiTypeTest;

beforeEach(() => {
    cyti = {
        title: 'new york',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 102,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        gavermentBuildings: [
            { type: "HOSPITAL", budget: 200000, styffCount: 200, address: { street: { title: "Central Str" } } },
            { type: "FIRE-STATION", budget: 500000, styffCount: 1000, address: { street: { title: "South Str" } } }
        ],
        cytizensNumber: 10000000,
    }
})


test('Hous shuld be destoid', () => {
    demolishHousesOnTheStreet(cyti, 'Happy street')

    expect(cyti.houses.length).toBe(1)
    expect(cyti.houses[0].id).toBe(1)

})


// test('list of title streets title', () => {
//     let happyStreet = getListTitleStreet(cyti.houses, 'Happy street')
//     let whiteStreet = getListTitleStreet(cyti.houses, 'White street')

//     expect(happyStreet.length).toBe(2)
//     expect(whiteStreet.length).toBe(1)



// })

test('get buildings with correct styff count', () => {
   let buildings = getBuildingsStyffCount(cyti.gavermentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION") 

})
