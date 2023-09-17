
test('shuld take old ages more 90', () => {
    const age = [1, 14, 35, 64, 93]
    const predicate = (age: number) => {
        return age > 90
    }
    // const oldAges = age.filter(predicate)
    const oldAges = age.filter(a => a > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(93)
})
test('shuld take sheep course < 160', () => {
    const courses = [
        { title: "html", price: 20 },
        { title: "js", price: 140 },
        { title: "react", price: 260 }
    ]
    const newCourses = courses.filter(a => a.price < 160)
    expect(newCourses.length).toBe(2)
    expect(newCourses[0].price).toBe(20)
    expect(newCourses[1].price).toBe(140)
    expect(newCourses[0].title).toBe("html")
    expect(newCourses[1].title).toBe("js")
})

test('get only complited tasks', ()=> {
    const tasks = [
        {id: 1, title:'bread', isDone: true},
        {id: 2, title:'milk', isDone: false},
        {id: 3, title:'coffee', isDone: true},
        {id: 4, title:'tea', isDone: false},
    ]
    const complitedTasks = tasks.filter(t=> t.isDone)
    const uncomplitedTasks = tasks.filter(t=> !t.isDone)
    expect(complitedTasks.length).toBe(2)
    expect(complitedTasks[0].id).toBe(1)
    expect(complitedTasks[1].id).toBe(3)

    expect(uncomplitedTasks.length).toBe(2)
    expect(uncomplitedTasks[0].id).toBe(2)
    expect(uncomplitedTasks[1].id).toBe(4)
})