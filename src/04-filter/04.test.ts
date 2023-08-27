test("should take old man, older then 91", ()=> {
    const AgePeople = [12, 22, 44, 66, 88, 99, 100, 102]
   /* const predicate = (age: number) => {
        return age > 91
    }
    const OldPeople = AgePeople.filter(predicate);*/
    const OldPeople = AgePeople.filter(age=> age>91)


    expect(OldPeople.length).toBe(3);

    expect(OldPeople[0]).toBe(99);
    expect(OldPeople[2]).toBe(102);
})


test("should take chip curses", ()=> {
    const curses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 150},
        {title: 'React', price: 200}
    ]
    /*const Chippredicate = (curse: cursesType) => {
        return curse.price < 160
    }
    const ChipCurses = curses.filter(Chippredicate);*/
    const ChipCurses = curses.filter(curse=> curse.price<160)



    expect(ChipCurses.length).toBe(2);

    expect(ChipCurses[0].price).toBe(110);
    expect(ChipCurses[1].title).toBe('JS');
})

test("get only completed tasks", ()=> {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'sugar', isDone: true}
    ]

    const complitedTasks = tasks.filter(task=> task.isDone)



    expect(complitedTasks.length).toBe(1);

    expect(complitedTasks[0].title).toBe('sugar');
})

test("get only uncompleted tasks", ()=> {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'sugar', isDone: true}
    ]

    const uncomplitedTasks = tasks.filter(task=> !task.isDone) /*!task.isDone -идентичные записи*/



    expect(uncomplitedTasks.length).toBe(2);

    expect(uncomplitedTasks[0].title).toBe('bread');
})

