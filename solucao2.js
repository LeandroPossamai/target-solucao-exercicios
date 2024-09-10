function countLetterA(str) {
    // Converte a string para minúsculas para garantir que todas as letras 'a' sejam contadas
    const lowerStr = str.toLowerCase();
    // Conta a quantidade de ocorrências da letra 'a'
    const count = (lowerStr.match(/a/g) || []).length;

    // Retorna o resultado
    return `A letra 'a' aparece ${count} vez(es) na string.`;
}

// Testando a função
const inputString = prompt("Digite uma string para verificar a quantidade de vezes que a letra 'a' aparece:");
console.log(countLetterA(inputString));
