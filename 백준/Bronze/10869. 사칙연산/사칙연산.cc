 #include <iostream> 

using namespace std;

int main() {
    ios::sync_with_stdio(false);  // 입출력 속도를 높이기 위해 사용
    cin.tie(NULL);  // cin과 cout의 동기화를 끊어 입력 속도 향상
    
    int A, B;
    

    cin >> A >> B;

    int result1 = A+B;
    int result2 =  A-B;
    int result3 = A*B;
    int result4 = A/B;
    int result5 = A%B;
    
    cout << result1 << endl<<result2<< endl << result3<< endl<< result4<< endl<<  result5<< '\n';
    
    return 0;
}
