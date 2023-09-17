const age = [1, 14, 35, 64, 93]

const predicate = (age: number) => {
  return  age > 90
}

type CoursType = {
    title: string
    price: number
}

const courses = [
    {title:"html", price:20},
    {title:"js", price:140},
    {title:"react", price:260}
]

const cheepCours = (courses: CoursType) => {
    return courses.price < 160
}