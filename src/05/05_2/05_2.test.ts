import { CytiTypeTest } from "../../02/02/02";
import { getGreetMessage, getStreetsOfGavBuild } from "./05_2";



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

test('list of streets of goverment buildings', ()=> {

    let streets = getStreetsOfGavBuild(cyti.gavermentBuildings)
    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central Str")
    expect(streets[1]).toBe("South Str") 
})
test('greeting people from street', ()=> {
    let message = getGreetMessage(cyti.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('hello people from White street')
    expect(message[1]).toBe('hello people from Happy street')
    expect(message[2]).toBe('hello people from Happy street') 
})