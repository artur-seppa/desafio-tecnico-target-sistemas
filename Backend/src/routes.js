const { Router } = require("express");
const { Exercicio1 } = require("./controller/Exercicio1");
const { Exercicio2 } = require("./controller/Exercicio2");
const { Exercicio3 } = require("./controller/Exercicio3");
const { Exercicio4 } = require("./controller/Exercicio4");
const { Exercicio5 } = require("./controller/Exercicio5");

// Controllers
const ex1 = new Exercicio1();
const ex2 = new Exercicio2();
const ex3 = new Exercicio3();
const ex4 = new Exercicio4();
const ex5 = new Exercicio5();

const router = Router();

router.get("/ex1", ex1.calcularSoma);
router.post("/ex2", ex2.verificarFibonacci);
router.get("/ex3", ex3.calcularFaturamento);
router.get("/ex4", ex4.calcularPercentuais);
router.post("/ex5", ex5.inverter);

module.exports = router;