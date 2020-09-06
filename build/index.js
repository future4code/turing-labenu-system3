"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_1 = require("./FileManager");
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const FullTimeMission_1 = require("./FullTimeMission");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const alunoUm = new Student_1.Student(1, 'Paulo', 'paulo@gmail.com', moment_1.default('13/08/2000', 'DD/MM/YYYY'));
const professorUm = new Teacher_1.Teacher(1, 'Mateus', 'mateus@gmail.com', [Teacher_1.TEACHER_SPECIALTY.BACKEND]);
const turmaUm = new FullTimeMission_1.FullTimeMission('1', '27/02/2020', '12/12/2020', [professorUm], [alunoUm], 1);
turmaUm.setName('Turing');
const databaseStudent = new FileManager_1.FileManager('./students.json');
const databaseTeacher = new FileManager_1.FileManager('./teachers.json');
const databaseMission = new FileManager_1.FileManager('./missions.json');
databaseStudent.writeFile([alunoUm]);
databaseTeacher.writeFile([professorUm]);
databaseMission.writeFile([turmaUm]);
const studentsList = databaseStudent.readFile();
const teachersList = databaseTeacher.readFile();
const missionsList = databaseMission.readFile();
console.log(`Aqui está a lista de estudantes: `);
for (let i of studentsList) {
    console.log(i);
}
console.log(`Aqui está a lista de professores: `);
for (let i of teachersList) {
    console.log(i);
}
console.log(`Aqui está a lista de turmas: `);
for (let i of missionsList) {
    console.log(i);
}
const listaDeEstudantes = databaseStudent.readFile();
let student = new Student_1.Student(1, '', '', moment_1.default());
let idx;
for (idx of listaDeEstudantes) {
    if (idx.id === 1) {
        student = new Student_1.Student(1, idx.name, idx.email, moment_1.default(idx.birthData));
    }
}
if ((moment_1.default().day() >= student.getBirthData().day()) && (moment_1.default().month() >= student.getBirthData().month())) {
    console.log(moment_1.default().year() - student.getBirthData().year());
}
else {
    console.log(moment_1.default().year() - student.getBirthData().year() - 1);
}
