class Polygon{

    constructor(intArray){
        this.sideLengths = intArray
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        return this.sideLengths.reduce( (sum, length) => { return sum + length }, 0);
    }
}