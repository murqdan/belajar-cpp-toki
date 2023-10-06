#include <iostream>
#include <cmath>
using namespace std;

int T;

void kedekatan(int N, int D) {
	int murid [N][2];
	
	for(int i = 0; i < N; i++) {
		cin >> murid[i][0] >> murid[i][1];
	}
	
	int terkecil = 0;
	int terbesar = 0;	
	
	for(int i = 0; i < N-1; i++) {
		for(int j = i+1; j < N; j++) {
			T = pow(abs(murid[j][0] - murid[i][0]), D) + pow(abs(murid[j][1] - murid[i][1]), D);
			if (terkecil==0 && terbesar==0) {
				terkecil = T;
				terbesar = T;
			} else if (T > terbesar) {
				terbesar = T;
			} else if (T < terkecil) {
				terkecil = T;
			}
		}
	}
	
	cout << terkecil << " " << terbesar << endl;
}

int main() {
	int N, D;
	cin >> N >> D;
	kedekatan(N, D);
}
