const calculatorObj = {
    //area of a parallelogram calculator
    areaOfParallelogram: function(base, height){
        const paraArea = base * height;
        return area.toFixed(2);
    },

    //volume of a cylinder calculator
    volumeOfCylinder: function(radius, height){
        const pi = 3.142;
        const volume = pi * (radius * radius) * height;
        return volume.toFixed(2);
    },

    //area of a rectangle calculator
    areaOfRectangle: function(length, breadth) {
        return length * breadth;
    }
}

console.log(calculatorObj.areaOfParallelogram(8, 10));
console.log(calculatorObj.volumeOfCylinder(6, 12));
console.log(calculatorObj.areaOfRectangle(13, 4));