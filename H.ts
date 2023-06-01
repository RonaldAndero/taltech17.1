interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class CmToInches implements CalculatingFunction {
    calculate(inches: number): number {
        return inches / 2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
}

class InchesToCm implements CalculatingFunction {
    calculate(inches: number): number {
        return inches * 2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string {
        return "cm";
    }
}

class AXplusB implements CalculatingFunction {
    constructor(
        protected coefficient: number,
        protected intercept: number,
        protected inputUnitType: string,
        protected outputUnitType: string
    ) {}
    calculate(x: number): number {
        return this.coefficient * x + this.intercept;
    }
    inputUnit(): string {
        return this.inputUnitType;
    }
    outputUnit(): string {
        return this.outputUnitType;
    }
}

class CelsiusToFahrenheit implements CalculatingFunction {
    calculate(celsius: number): number {
        return (celsius * 9) / 5 + 32;
    }
    inputUnit(): string {
        return "°C";
    }
    outputUnit(): string {
        return "°F";
    }
}

class FahrenheitToCelsius implements CalculatingFunction {
    calculate(fahrenheit: number): number {
        return ((fahrenheit - 32) * 5) / 9;
    }
    inputUnit(): string {
        return "°F";
    }
    outputUnit(): string {
        return "°C";
    }
}

class VoltageToCurrent implements CalculatingFunction {
    constructor(protected resistance: number) {}
    calculate(voltage: number): number {
        return voltage / this.resistance;
    }
    inputUnit(): string {
        return "V";
    }
    outputUnit(): string {
        return "A";
    }
}

class CurrentToVoltage implements CalculatingFunction {
    constructor(protected resistance: number) {}
    calculate(current: number): number {
        return current * this.resistance;
    }
    inputUnit(): string {
        return "A";
    }
    outputUnit(): string {
        return "V";
    }
}

class PowerCalculation implements CalculatingFunction {
    constructor(protected resistance: number) {}
    calculate(voltage: number): number {
        const current = voltage / this.resistance;
        return voltage * current;
    }
    inputUnit(): string {
        return "V";
    }
    outputUnit(): string {
        return "W";
    }
}

// Usage example:
const cmToInches = new CmToInches();
const inchesToCm = new InchesToCm();
const axPlusB = new AXplusB(2, 3, "x", "y");
const celsiusToFahrenheit = new CelsiusToFahrenheit();
const fahrenheitToCelsius = new FahrenheitToCelsius();
const voltageToCurrent = new VoltageToCurrent(10);
const currentToVoltage = new CurrentToVoltage(5);
const powerCalculation = new PowerCalculation(2);

console.log(cmToInches.calculate(10)); // Output: 3.937007874015748
console.log(inchesToCm.calculate(10)); // Output: 25.4
console.log(axPlusB.calculate(5)); // Output: 13
console.log(celsiusToFahrenheit.calculate(10)); // Output: 50
console.log(fahrenheitToCelsius.calculate(50)); // Output: 10
console.log(voltageToCurrent.calculate(20)); // Output: 2
console.log(currentToVoltage.calculate(3)); // Output: 15
console.log(powerCalculation.calculate(10)); // Output: 50
