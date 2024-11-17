#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N, M;
    cin >> N >> M;
    
    vector<vector<int>> A(N, vector<int>(M));
    vector<vector<int>> B(N, vector<int>(M));
    vector<vector<int>> result(N, vector<int>(M));

    for (int i = 0; i < N; ++i)
        for (int j = 0; j < M; ++j)
            cin >> A[i][j];

    for (int i = 0; i < N; ++i)
        for (int j = 0; j < M; ++j)
            cin >> B[i][j];

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < M; ++j) {
            result[i][j] = A[i][j] + B[i][j];
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
