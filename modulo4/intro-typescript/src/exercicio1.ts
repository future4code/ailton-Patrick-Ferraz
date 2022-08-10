function tipoTriangulo(a: string, b: string, c: string): string {
    if (a == b && b == c) {
        return "Equilatero";
    }
    else if (a == b || b == c || a == c) {
        return "Isosceles";
    }
    else {
        return "Escaleno";
    }
}
console.log(tipoTriangulo("15","20","20"))