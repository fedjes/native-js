type propsType = {
    name: string
    age: number
    lessons: Array<lessonsType>
    address:AddresType
}

type AddresType = {
    street: streetType
}
type streetType = {
    title: string
}

type lessonsType = {
    title: string
}
let props: propsType;


beforeEach(() => {
     props = {
        name: 'Felis',
        age: 36,
        lessons: [{ title: '1' }, { title: '2' }],
        address: {
            street: {
                title: 'pobedi'
            }
        }
    }
})


test('', () => {
   

    // const age = props.age
    // const lessons = props.lessons
    const { age, lessons } = props

    expect(age).toBe(36)
    expect(lessons.length).toBe(2)
})