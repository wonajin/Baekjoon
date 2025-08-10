function solution(s) {
    const numWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    numWords.forEach((word, idx) => {
        s = s.split(word).join(idx);
    });
    
    return Number(s);
}
