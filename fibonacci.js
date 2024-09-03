const Add = (n) => {
   let a = 0, b = 1, next

   for (let i = 1; i <= n; i++) {
        next = a + b
        a = b
        b = next
   }
}

Add(10)

const VerifyA = (str) => {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++
        }

        if (count > 0) {
            console.log(`A letra 'a' ocorre ${count} vezes na string.`);
        } else {
            console.log("A letra 'a' não ocorre na string.");
        }

    }
}


const Trecho = () => {
let i = 12
let soma = 0
let k = 1

while (k <= i) {
    k += 1
    soma += k

}
}

console.log(Trecho)

// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 200

// ligo o primeiro interruptor e deixo ligado, depois desligo e ligo o segundo, depois vou até a sala das lampadas. A que estiver acesa é a do segundo interruptor, tocando nas outras duas lampadas, uma está quente e apagada, ela é controlada pelo primeiro interruptor, a segunda está fria e apagada, controlada pelo terceiro que nunca foi ligado.