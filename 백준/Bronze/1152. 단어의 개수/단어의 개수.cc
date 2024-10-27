#include <iostream>
#include <sstream> 
#include <string>   

int main() {
    std::string input;
    std::getline(std::cin, input);  

    std::istringstream stream(input); 
    std::string word;
    int cnt = 0;

    while (stream >> word) {
        cnt++;
    }

    std::cout << cnt << std::endl;  

    return 0;
}
