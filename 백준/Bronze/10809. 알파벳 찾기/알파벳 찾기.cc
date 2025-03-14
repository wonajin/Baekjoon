#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    string s;
    cin >> s; 

    
    for (char c = 'a'; c <= 'z'; c++) {
        int position = -1;  

        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == c) { 
                position = i; 
                break;  
            }
        }

        cout << position << " ";  
    }

    return 0;
}
