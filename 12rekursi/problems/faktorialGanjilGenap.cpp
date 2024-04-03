#include <iostream>
using namespace std;

int faktorialGG(int N) {
	if(N == 1) {
		return 1;
	} else if(N % 2 == 0) {
		return (N / 2) * faktorialGG(N - 1);
	} else {
		return N * faktorialGG(N - 1);
	}
}

int main() {
	int N;
	cin >> N;
	cout << faktorialGG(N) << endl;
}
