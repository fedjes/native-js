import { StudentType } from './../02/02';
import { IsIdentive, addSkill, changeIactive } from './03';
let student: StudentType

beforeEach(() => {
    student = {
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
})

test('new text skill shulbe added', () => {
    addSkill(student, 'ts')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('ts')
    expect(student.technologies[3].id).toBeDefined()
})

test('student shuld be active', () => {
    expect(student.isActive).toBe(false)
    changeIactive(student)
    expect(student.isActive).toBe(true)
    
})
test('shuld be true if country identive', () => {
  
   let res1 = IsIdentive(student, 'belorus')
   let res2 = IsIdentive(student, 'moscow')
    expect(res1).toBe(true)
    expect(res2).toBe(false)
    
})