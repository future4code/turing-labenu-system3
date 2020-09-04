import { FileManager } from './FileManager';
import { Student } from './Student';
import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import { FullTimeMission } from './FullTimeMission';
import moment from 'moment'
moment.locale("pt-br")

const alunoUm = new Student(1, 'Paulo', 'paulo@gmail.com', moment('13/08/2000', 'DD/MM/YYYY'));

const professorUm = new Teacher(1, 'Mateus', 'mateus@gmail.com', [TEACHER_SPECIALTY.BACKEND]);

const turmaUm = new FullTimeMission('1', '27/02/2020', '12/12/2020', [professorUm], [alunoUm], 1);

const databaseStudent = new FileManager('./students.json');

const databaseTeacher = new FileManager('./teachers.json');

const databaseMission = new FileManager('./missions.json');

// databaseStudent.writeFile([alunoUm])

// databaseTeacher.writeFile([professorUm])

// databaseMission.writeFile([turmaUm])

// console.log(`Aqui está a lista de estudantes: ${databaseStudent.readFile()}`)

// console.log(`Aqui está a lista de professores: ${databaseTeacher.readFile()}`)

// console.log(`Aqui está a lista de turmas: ${databaseMission.readFile()}`)

const listaDeEstudantes = databaseStudent.readFile()
const student: Student = listaDeEstudantes.filter((idx: any) => {
    return idx.id === 1
})

const today = moment()

// const diffYears: number =  today.diff(student.getBirthData())

console.log(`A idade do aluno é de: ${student.getBirthData()} anos.`)