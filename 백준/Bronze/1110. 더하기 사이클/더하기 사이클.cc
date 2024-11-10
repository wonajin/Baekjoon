#include <iostream>
using namespace std;

int main() {
    int N, original, cycleCount = 0;
    cin >> N;

    original = N;
    int currentNumber = N;

    do {
        int tens = currentNumber / 10;
        int ones = currentNumber % 10;
        int sum = tens + ones;
        currentNumber = (ones * 10) + (sum % 10);
        cycleCount++;
    } while (currentNumber != original);

    cout << cycleCount << endl;
    return 0;
}
