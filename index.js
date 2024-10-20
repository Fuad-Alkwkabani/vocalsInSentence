function getSentence() {
    let sentence = document.getElementById('sentence').value;  
    document.getElementById('result').textContent = `'${sentence}'`;  
    return `'${sentence}'`; 
}