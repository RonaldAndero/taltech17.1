import { CmToInches, KphToMps } from "./H";

describe("CmToInches", () => {
    const converter = new CmToInches();

    test("calculate should convert cm to inches", () => {
        expect(converter.calculate(10)).toBeCloseTo(3.937, 3);
        expect(converter.calculate(20)).toBeCloseTo(7.874, 3);
        // Add more test cases as needed
    });

    test("inputUnit should return 'cm'", () => {
        expect(converter.inputUnit()).toBe("cm");
    });

    test("outputUnit should return 'in'", () => {
        expect(converter.outputUnit()).toBe("in");
    });
});

describe("KphToMps", () => {
    const coefficient = 0.277778; // Conversion coefficient from km/h to m/s
    const converter = new KphToMps(coefficient);

    test("calculate should convert kph to m/s", () => {
        expect(converter.calculate(60)).toBeCloseTo(16.6667, 4);
        expect(converter.calculate(100)).toBeCloseTo(27.7778, 4);
        // Add more test cases as needed
    });

    test("inputUnit should return 'km/h'", () => {
        expect(converter.inputUnit()).toBe("km/h");
    });

    test("outputUnit should return 'm/s'", () => {
        expect(converter.outputUnit()).toBe("m/s");
    });
});
