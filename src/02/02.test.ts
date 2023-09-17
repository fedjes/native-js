import { CytiTypeTest } from "./02/02";

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
        {type:"HOSPITAL", budget: 200000, styffCount: 200, address: {street: {title:"Central Str"}}},
        {type:"FIRE-STATION", budget: 500000, styffCount: 1000, address: {street: {title:"South Str"}}}
    ],
        cytizensNumber: 10000000,
    }
})

test('test cyti should be contain 3', () => {
    expect(cyti.houses.length).toBe(3)
    expect(cyti.houses[0].buildedAt).toBe(2012)
    expect(cyti.houses[0].repaired).toBe(false)
    expect(cyti.houses[0].address.number).toBe(100)
    expect(cyti.houses[0].address.street.title).toBe('White street')

    expect(cyti.houses[1].buildedAt).toBe(2008)
    expect(cyti.houses[1].repaired).toBe(false)
    expect(cyti.houses[1].address.number).toBe(102)
    expect(cyti.houses[1].address.street.title).toBe('Happy street')

    expect(cyti.houses[2].buildedAt).toBe(2020)
    expect(cyti.houses[2].repaired).toBe(false)
    expect(cyti.houses[2].address.number).toBe(101)
    expect(cyti.houses[2].address.street.title).toBe('Happy street')
})


test('test cyti should be contain hospital and fire station', () => {
    expect(cyti.gavermentBuildings.length).toBe(2)
    expect(cyti.gavermentBuildings[0].type).toBe("HOSPITAL")
    expect(cyti.gavermentBuildings[0].budget).toBe(200000)
    expect(cyti.gavermentBuildings[0].styffCount).toBe(200)
    expect(cyti.gavermentBuildings[0].address.street.title).toBe("Central Str")

    expect(cyti.gavermentBuildings[1].type).toBe("FIRE-STATION")
    expect(cyti.gavermentBuildings[1].budget).toBe(500000)
    expect(cyti.gavermentBuildings[1].styffCount).toBe(1000)
    expect(cyti.gavermentBuildings[1].address.street.title).toBe("South Str")
})