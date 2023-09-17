import { CytiTypeTest } from "../02/02/02";
import { addMoneyToBudget, createMessage, repairHous, toFireStyff, toHireStyff } from "./03_2";


let cyti: CytiTypeTest;

beforeEach(() => {
    cyti = {
        title: 'new york',
        houses: [
            {
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
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 102,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
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

test('budget shul be changed for HOSPITAL', () => {
    addMoneyToBudget(cyti.gavermentBuildings[0], 100000)

    expect(cyti.gavermentBuildings[0].budget).toBe(300000)
    // expect(cyti.gavermentBuildings[1].budget).toBe(500000)
})

test('budget shuld be changed for FIRE-STATION', () => {
    addMoneyToBudget(cyti.gavermentBuildings[1], -100000)

    // expect(cyti.gavermentBuildings[0].budget).toBe(200000)
    expect(cyti.gavermentBuildings[1].budget).toBe(400000)
})

// test('Hous shuld be destroid', ()=> {
//     demolishHousesOnTheStreet(cyti,'Happy street')
//     expect(cyti.houses.length).toBe(1)
//     expect(cyti.houses[0].id).toBe(1)
// })

test('Houses shuld be repaired ', () => {
    repairHous(cyti.houses[1])
    expect(cyti.houses[1].repaired).toBeTruthy()
})

test('staff shuld be fire', () => {
    toFireStyff(cyti.gavermentBuildings[0], 20)
    expect(cyti.gavermentBuildings[0].styffCount).toBe(180)
})

test('staff shuld be increeced', () => {
    toHireStyff(cyti.gavermentBuildings[0], 20)
    toHireStyff(cyti.gavermentBuildings[1], 100)
    expect(cyti.gavermentBuildings[0].styffCount).toBe(220)
    expect(cyti.gavermentBuildings[1].styffCount).toBe(1100)
})

test('Greet message shuld be correct for cyti', () => {
//    const message = createMessage(cyti)

//     expect(message).toBe('hello new york cytizens i wont to be free') 
expect(createMessage(cyti)).toBe('hello new york cytizens i wont to be free') 
})