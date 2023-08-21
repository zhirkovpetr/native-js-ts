import {addSkill, studentActive, studentCity} from "./03";
import {StudentType} from "../02-object/02";
let student: StudentType;

beforeEach(()=> {
    student= {
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            street: "Syrganova 2",
            city: {
                country: "Belarus",
                city: "Minsk"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            }
        ]
    }
})

test("new teach skill should be added to student", ()=> {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'React');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be made active", ()=> {
    expect(student.isActive).toBe(false);
    studentActive(student);
    expect(student.isActive).toBe(true);

})

test("student live in city?", ()=> {
    let result1= studentCity(student, "Minsk");
    let result2= studentCity(student, "Moscow");

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})



