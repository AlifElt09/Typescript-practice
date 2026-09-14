/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    showInfo(): void {
        console.log(`Their name is ${this.name},and they are ${this.age} years old`);
    }
}
class Student extends Person {
    constructor(
        public studentId: string,
        public grade: number,
        name: string,
        age: number
    ) {
        super(name, age);
    }
    showInfo(): void {
      console.log(`The ${this.studentId} name is ${this.name},they are ${this.grade} grade`)
    }
}
class Teacher extends Person {
    constructor(
        public employeeId : string,
        public subject : string,
        name : string,
        age : number
    ) {
      super(name, age)
    }
    showInfo(): void {
      console.log(`The ${this.employeeId} is ${this.name},their main subject is ${this.subject}`)
    }
}
const npc = new Person ("Npc", 0)
const student = new Student ("ST001", 11, "Mas Messi RPL", 17 )
const teacher = new Teacher ("STK001", "RPL Fundamental", "Mafia ronaldo", 38 )

npc.showInfo()
student.showInfo()
teacher.showInfo()