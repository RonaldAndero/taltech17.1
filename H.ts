interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class Figure{
    constructor(protected calculator:CalculatingFunction, protected g){
        this.draw();
    }
    draw(){
        for(let i=0; i<25; i++){
            this.g.fillRect(10*i, 300-10*this.calculator.calculate(i), 3, 3);
        }
    }
}