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
const databaseStudent = new FileManager_1.FileManager('./students.json');
const databaseTeacher = new FileManager_1.FileManager('./teachers.json');
const databaseMission = new FileManager_1.FileManager('./missions.json');
databaseStudent.writeFile([alunoUm]);
databaseTeacher.writeFile([professorUm]);
databaseMission.writeFile([turmaUm]);
const listaDeEstudantes = databaseStudent.readFile();
const student = listaDeEstudantes.filter((idx) => {
    return idx.id === 1;
});
const today = moment_1.default();
console.log(`A idade do aluno é de: ${student.getBirthData()} anos.`);
