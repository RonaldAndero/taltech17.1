interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class CmToInches implements CalculatingFunction {
    calculate(cm: number): number {
        return cm / 2.54;
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

class KphToMps implements CalculatingFunction {
    calculate(kph: number): number {
        return kph / 3.6;
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string {
        return "m/s";
    }
}

class MpsToKph implements CalculatingFunction {
    calculate(mps: number): number {
        return mps * 3.6;
    }
    inputUnit(): string {
        return "m/s";
    }
    outputUnit(): string {
        return "km/h";
    }
}

// Usage example:
const cmToInches = new CmToInches();
const inchesToCm = new InchesToCm();
const kphToMps = new KphToMps();
const mpsToKph = new MpsToKph();

console.log(cmToInches.calculate(10)); // Output: 3.937007874015748
console.log(inchesToCm.calculate(10)); // Output: 25.4
console.log(kphToMps.calculate(100)); // Output: 27.77777777777778
console.log(mpsToKph.calculate(10)); // Output: 36
