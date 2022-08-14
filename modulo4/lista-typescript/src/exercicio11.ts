
function algarismoRomano (numero: number): string {
    let algarismoRomano: string = '';
    const algarismosRomanos: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const algarismos: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i: number = 0; i < algarismos.length; i++) {
        while (numero >= algarismos[i]) {
            algarismoRomano += algarismosRomanos[i];
            numero -= algarismos[i];
        }
    }
    return algarismoRomano;
}

console.log(algarismoRomano(Number(process.argv[2])));