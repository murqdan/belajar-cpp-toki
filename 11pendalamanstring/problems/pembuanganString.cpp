#include <iostream>
#include <string>
using namespace std;

int main() {
    string S, T;
	cin >> S >> T;
	
	int lengthT = T.length();
	int sfindt = S.find(T);
	
	while(sfindt > -1) {
		S.erase(S.find(T), lengthT);
		sfindt = S.find(T);
	}
	
	cout << S << endl;
}
