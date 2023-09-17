export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addresType
    technologies: Array<technType>
}

type addresType = {
    stritTitle: string
    city: cityType
}

type cityType = {
    countru: string
    cityName: string
}

type technType = {
    id: number
    title: string
}
export const student = {
    id: 1,
    name: 'Fedjes',
    age: 29,
    isActive: false,
    address: {
        stritTitle: 'lyg',
        city: {
            countru: 'belorus',
            cityName: 'minsk'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'js'
        },
        {
            id: 2,
            title: 'html'
        }, {
            id: 3,
            title: 'css'
        }
    ]
}

