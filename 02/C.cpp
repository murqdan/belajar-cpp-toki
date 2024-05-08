#include <iostream>
using namespace std;

int GCD(int a, int b) {
	if(b == 0) {
		return a;
	} else {
		return GCD(b, a%b);
	}
}

int LCM(int a, int b) {
	return a*b / GCD(a, b);
}

int main() {
	int n;
	
	cin >> n;
	int dArr[n];
	
	for(int i = 0; i < n; i++) {
		cin >> dArr[i];
	}
	
	int first = 0;
	first = LCM(dArr[0], dArr[1]);
	
	int currLCM = first;
	
	if(n == 2) {
		cout << first << endl;
	} else {
		for(int i = 2; i < n; i++) {
			currLCM = LCM(currLCM, dArr[i]);
		}
		
		cout << currLCM << endl;
	}
}
