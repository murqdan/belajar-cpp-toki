#include <iostream>
using namespace std;
#include <cmath>

int A, B, K;

int kompofung(int x) {
	
	for(int i = 0; i < K; i++) {
		x = abs(A*x + B);
	}

	return x;
}

int main() {
	int x;
	cin >> A >> B >> K >> x;
	int output = kompofung(x);
	cout << output << endl;
}
