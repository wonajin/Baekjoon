#include <iostream>
#include <string>
using namespace std;

int main() {
    int a,b,c;

    cin>>a>>b>>c;
    
    cout<<a+b-c<<endl;
    
    string strA = to_string(a);
    string strB = to_string(b);
    int x = stoi(strA + strB) - c; 

    cout << x << endl;
    
     return 0;

}
