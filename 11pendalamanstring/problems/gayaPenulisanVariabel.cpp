#include <iostream>
#include <string>
using namespace std;

void toCamel(string S) {
	while(S.find("_") != -1) {
		S[S.find("_") + 1] = S[S.find("_") + 1] - ('a' - 'A');
		S.erase(S.find("_"), 1);
	}
	cout << S << endl;
}

void to_snake(string S) {
	string temp = S;
	int low = 0;
	
	for(int i = 0; i < S.length(); i++) {
		if(S[i] >= 'A' && S[i] <= 'Z') {
			S[i] = S[i] + ('a' - 'A');
			S.insert(i, "_");
		} else {
			low += 1;
		}
	}
	
	if(low == S.length()) {
		cout << temp << endl;
	} else {
		cout << S << endl;
	}
}

void checkS(string S) {
	if(S.find("_") != -1) {
		toCamel(S);
	} else {
		to_snake(S);
	}
}

int main() {
	string S;
	cin >> S;
	checkS(S);
}
