import { Question } from "../models/question.js";
import { data } from "./data.js";

//recorremos el arreglo
//map recorre el arreglo obteniendo su info y añade nueva info
//al objeto añadimos una nueva instancia
export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
