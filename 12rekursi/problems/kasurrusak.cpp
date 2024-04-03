#include <iostream>
using namespace std;

bool palindrom(string S) {
    int lengthS = S.length();
    if (lengthS <= 1) {
        return true;
    }
    string sub = S.substr(1, lengthS - 2); 
    return (S[0] == S[lengthS - 1]) && palindrom(sub);
}

int main() {
    string S;
    cin >> S;
    bool result = palindrom(S);
    if(result) {
		cout << "YA" << endl;
	} else {
		cout << "BUKAN" << endl;
	}
}
