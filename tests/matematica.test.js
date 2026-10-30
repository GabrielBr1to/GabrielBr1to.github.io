const { somar, subtrair, multiplicar, dividir } = require("../assets/js/matematica");

describe("operações matemáticas", () => {
    test("soma dois números", () => {
        expect(somar(2, 3)).toBe(5);
    });

    test("subtrai dois números", () => {
        expect(subtrair(8, 3)).toBe(5);
    });

    test("multiplica dois números", () => {
        expect(multiplicar(4, 3)).toBe(12);
    });

    test("divide dois números", () => {
        expect(dividir(15, 3)).toBe(5);
    });

    test("informa erro ao dividir por zero", () => {
        expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero.");
    });
});
