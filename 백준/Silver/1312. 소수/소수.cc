#include <iostream>
using namespace std;

int main() {
    int A, B, N;
    cin >> A >> B >> N;

    A %= B; // 나머지를 구해서 소수점 계산 준비

    for (int i = 0; i < N - 1; ++i) {
        A *= 10;       // 소수점 한 자리 이동
        A %= B;        // 현재 자리의 나머지 유지
    }

    A *= 10;           // 마지막 자리 계산
    cout << A / B << endl; // N번째 자리 출력

    return 0;
}
