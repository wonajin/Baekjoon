#include <iostream>
#include <vector>
#include <set>
#include <algorithm>

int main() {
    int N;
    std::cin >> N;
    std::set<std::string> uniqueWords;
    std::vector<std::string> words;

    for (int i = 0; i < N; ++i) {
        std::string word;
        std::cin >> word;
        uniqueWords.insert(word);
    }

    for (const auto& word : uniqueWords) {
        words.push_back(word);
    }

    std::sort(words.begin(), words.end(), [](const std::string& a, const std::string& b) {
        if (a.size() == b.size()) {
            return a < b;
        }
        return a.size() < b.size();
    });

    for (const auto& word : words) {
        std::cout << word << "\n";
    }

    return 0;
}
