#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    
    int length = word.length();
    bool isPalindrome = true;
    
    for (int i = 0; i < length / 2; i++) {
        if (word[i] != word[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    
    cout << (isPalindrome ? 1 : 0);
    return 0;
}
