#include <iostream>
using namespace std;

void mountain(int N) {
	if(N == 1) {
		cout << "*" << endl;
	} else {
		mountain(N-1);
		for(int i = 1; i <= N; i++) {
			if(i == N) {
				cout << "*" << endl;
				break;
			}
			cout << "*";
		}
		mountain(N-1);
	} 
}

int main() {
	int N;
	cin >> N;
	mountain(N);
}
