#include <iostream>
using namespace std;

int N, K;
int catat[100];
int pernah[100];

void brankas(int kedalaman) {
	if (kedalaman >= K) {
		for (int q = 0; q < K; q++) {
			cout << catat[q];
			if(q != N-1) {
				cout << " ";
			}
		}
		cout << endl;
	} else {
		for (int i = catat[kedalaman-1]+1; i <= N; i++) {
			if (!pernah[i]) {
				pernah[i] = true;
				catat[kedalaman] = i; 
				brankas(kedalaman + 1);
				pernah[i] = false;
			}
		}
	}
}

int main() {
	cin >> N >> K;
	brankas(0);
}
