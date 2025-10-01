function solution(players, callings) {

    const rank = {};
    players.forEach((player, idx) => {
        rank[player] = idx;
    });

    for (const name of callings) {
        const curIdx = rank[name];      // 현재등수
        const frontPlayer = players[curIdx - 1]; // 앞 사람

        players[curIdx - 1] = name;
        players[curIdx] = frontPlayer;

        rank[name] = curIdx - 1;
        rank[frontPlayer] = curIdx;
    }

    return players;
}
