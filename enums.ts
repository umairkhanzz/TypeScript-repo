function addtwo(num: number) : number{

    return num +2;

}


function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
 

addtwo(8)

export {}
