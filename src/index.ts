import { FileManager } from './FileManager';
import { Student } from './Student';
import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import { FullTimeMission } from './FullTimeMission';
import moment from 'moment'
moment.locale("pt-br")

const alunoUm = new Student(1, 'Paulo', 'paulo@gmail.com', moment('13/08/2000','DD/MM/YYYY'));

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
let student: Student = new Student(1, '','', moment()); 
let idx: Student;

for( idx of listaDeEstudantes){
    if(idx.id === 1) {
        student = new Student(1, idx.name,idx.email, moment(idx.birthData) );
    }
}

if( (moment().day() >= student.getBirthData().day()) && (moment().month()  >= student.getBirthData().month())){
    console.log(moment().year() - student.getBirthData().year());
}
else{
    console.log( moment().year() - student.getBirthData().year() -1);
}
