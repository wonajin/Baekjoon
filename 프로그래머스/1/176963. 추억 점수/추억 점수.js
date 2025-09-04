function solution(name, yearning, photo) {
    var answer = [];
    

    var scoreMap = {};
    for (var i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i];
    }

 
    for (var i = 0; i < photo.length; i++) {
        var sum = 0;
       
        for (var j = 0; j < photo[i].length; j++) {
            var person = photo[i][j];
            if (scoreMap[person] !== undefined) { 
                sum += scoreMap[person];
            }
        }
        answer.push(sum);
    }

    return answer;
}
