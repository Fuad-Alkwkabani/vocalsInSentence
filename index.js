function getSentence() {
    let sentence = document.getElementById('sentence').value;  
    document.getElementById('result').textContent = `'${sentence}'`;  
    return `'${sentence}'`; 
}
function searchVocals(sentence) {
    let  vocals = ['a', 'e', 'i', 'o', 'u'];
    let  foundVocals = [];
    for (let char of sentence.toLowerCase()) {
        if (vocals.includes(char)) {
            foundVocals.push(char);
        }
    }
    return foundVocals;
}


function deleteDuplicity(list) {
    return [...new Set(list)];
}
function getVocals() {
    const sentence = getSentence();  // Obtiene la frase
    let foundVocals = searchVocals(sentence);  // Busca vocales en la frase
    foundVocals = deleteDuplicity(foundVocals);  // Elimina duplicados
    const result = foundVocals.join(',');  // Junta las vocales en un string
    document.getElementById('resulto').textContent = result;  // Muestra el resultado
    return result;
}