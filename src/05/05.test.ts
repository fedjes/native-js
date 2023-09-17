import { createGreetingMessage, peopleType } from "./05"

let people: Array<peopleType> = [

]

beforeEach(() => {
    people = [
        { name: 'ivan ivanov', age: 43 },
        { name: 'petr petrov', age: 23 },
        { name: 'yrl yrlov', age: 13 },
    ]
})
test('should be get array greetings', () => {
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello ivan. Welocm to tests')
    expect(messages[1]).toBe('Hello petr. Welocm to tests')
    expect(messages[2]).toBe('Hello yrl. Welocm to tests')
})