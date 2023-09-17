
export type peopleType = {
    name: string
    age: number
}

const people: Array<peopleType> = [
    { name: 'ivan ivanov', age: 43 },
    { name: 'petr petrov', age: 23 },
    { name: 'yrl yrlov', age: 13 },
]

const transformator = (man: peopleType) => {
    return {
        stack:['js', 'react' , 'ts' , 'css' , 'tdd', 'html'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devS = people.map(transformator)

const messages = people.map(p=> `Hello ${p.name.split(' ')[0]}. Welocm to tests`)

export const createGreetingMessage = (people:Array<peopleType>) => {
return people.map(p=> `Hello ${p.name.split(' ')[0]}. Welocm to tests`)
}