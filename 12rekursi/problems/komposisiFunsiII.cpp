#include <iostream>
using namespace std;

int A, B, x;

int komposisi(int K) {
	if(K == 0) {
		return x;
	}
	return abs(A * komposisi(K-1, x) + B);  
}

int main() {
	int K;
	cin >> A >> B >> K >> x;
	cout << komposisi(K) << endl;
}
