#include <iostream>
using namespace std;

int main() {
	string S;
	int K;
	string result;
	
	string alphabet = "abcdefghijklmnopqrstuvwxyz";
	
    int sizealp = alphabet.length();
	
	cin >> S >> K;
	
	int Slength = S.length();
	
	for(int i = 0; i < Slength; i++) {
		for(int j = 0; j < sizealp; j++) {
			if(S[i] == alphabet[j]) {
				if(j+K > 25) {
					result += alphabet[((j+K)-25) - 1];
				} else {
					result += alphabet[j+K];
				}
			}
		}
	}
	
	cout << result << endl;
}
