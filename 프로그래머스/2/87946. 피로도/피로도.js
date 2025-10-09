function solution(k, dungeons) {
    let maxCount = 0; // 탐험 가능한 최대 던전 수를 저장할 변수

    // DFS 함수 정의 (현재 피로도, 탐험한 던전 수, 방문 여부)
    function explore(currentFatigue, count, visited) {
        // 현재까지 탐험한 던전 수가 최대라면 갱신
        maxCount = Math.max(maxCount, count);

        // 모든 던전을 하나씩 검사
        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i]; // i번째 던전의 필요/소모 피로도

            // 아직 방문하지 않았고, 현재 피로도로 탐험 가능하면
            if (!visited[i] && currentFatigue >= need) {
                visited[i] = true; // 방문 표시
                // 피로도 감소시키고 다음 탐험 진행
                explore(currentFatigue - cost, count + 1, visited);
                visited[i] = false; // 백트래킹 (다른 경우의 수를 위해 복구)
            }
        }
    }

    // 방문 여부를 저장하는 배열 초기화
    const visited = new Array(dungeons.length).fill(false);

    // 탐험 시작 (현재 피로도 k, 탐험 수 0)
    explore(k, 0, visited);

    return maxCount; // 최대로 탐험한 수 반환
}
