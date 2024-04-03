#include <iostream>
#include <string>
using namespace std;

int main() {
	string alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
	string S;
	cin >> S;
	
	int sL = S.length();
	int aL = alphabet.length();

	for(int i = 0; i < sL; i++) {
		for(int j = 0; j < aL; j++) {
			if(S[i] == alphabet[j]) {
				if(j % 2 != 0) {
					S[i] = alphabet[j-1];
				} else {
					S[i] = alphabet[j+1];
				}
				break;
			}
		}
	}
	
	cout << S << endl;
}
