#include <iostream> 

using namespace std;

int main() {
    ios::sync_with_stdio(false);  // 입출력 속도를 높이기 위해 사용
    cin.tie(NULL);  // cin과 cout의 동기화를 끊어 입력 속도 향상
    
    int a, b;
    

    cin >> a >> b;

   if(a>b)
   cout << ">";
    else if(a<b)
    cout << "<"; 
    else
    cout << "==";
    
    
    return 0;
}
