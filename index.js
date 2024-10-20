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
    const sentence = getSentence();  
    let foundVocals = searchVocals(sentence);  
    foundVocals = deleteDuplicity(foundVocals); 
    const result = foundVocals.join(',');  
    document.getElementById('resulto').textContent = result;  
    return result;
}