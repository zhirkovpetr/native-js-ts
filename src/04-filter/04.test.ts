import {chipPredicate, curses, predicate} from "./04";

test("should take old man, older then 91", ()=> {
    const AgePeople = [12, 22, 44, 66, 88, 99, 100, 102]
    const OldPeople = AgePeople.filter(predicate);

    expect(OldPeople.length).toBe(3);
    expect(OldPeople.length).toBe(3);
    expect(OldPeople[0]).toBe(99);
    expect(OldPeople[2]).toBe(102);
})


test("should take chip curses", ()=> {
    const ChipCurses = curses.filter(chipPredicate);

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
    const completedTasks = tasks.filter(task=> task.isDone)

    expect(completedTasks.length).toBe(1);
    expect(completedTasks[0].title).toBe('sugar');
})

test("get only uncompleted tasks", ()=> {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'sugar', isDone: true}
    ]
    const uncompletedTasks = tasks.filter(task=> !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe('bread');
})
