#include <iostream>
using namespace std;

int R, C;
char b[20][8];
int isLoop = 0;

void eksekusi() {
	int tw = 0;
	int basis1 = -1;

	for(int i = R-1; i >= 0; i--) {
		for(int j = 0; j < C; j++) {
			if(b[i][j] == '0') {
				tw += 0;
			} else if(b[i][j] == '1') {
				tw += 1;
			}
			if(j == C-1 && tw == C) {
				if(basis1 == -1) {
					basis1 = i;
				}
				for(int k = i; k <= i; k++) {
					for(int l = 0; l < C; l++) {
						b[k][l] = '0';
					}
				}
			}
		}
		tw = 0;
	}
	
	if(basis1 == R-1) {
		int totalBlack = 0;

		for(int i = 0; i < C; i++) {
			for(int j = basis1-1; j >= 0; j--) {
				if(b[j][i] == '1') {
					totalBlack++;
				}
				if(j == 0 && totalBlack > 0) {
					for(int p = basis1; p >= 0; p--) {
						if(totalBlack > 0) {
							b[p][i] = '1';
							totalBlack--;
						} else {
							b[p][i] = '0';
						}
					}
				}
			}
		}
	} else if(basis1 < R) {
		int newBasis[C][2];

		for(int i = 0; i < C; i++) {
			for(int j = basis1; j < R; j++) {
				if(b[j+1][i] == '1' || j == R-1) {
					newBasis[i][0] = j;
					newBasis[i][1] = i;
					j=R+3;
				}
			}
		}

		int totalBlack = 0;

		for(int i = 0; i < C; i++) {
			for(int j = newBasis[i][0]; j >= 0; j--) {
				if(b[j][newBasis[i][1]] == '1') {
					totalBlack++;
				}
				if(j == 0 && totalBlack > 0) {
					for(int p = newBasis[i][0]; p >= j; p--) {
						if(totalBlack > 0) {
							b[p][newBasis[i][1]] = '1';
							totalBlack--;
						} else {
							b[p][newBasis[i][1]] = '0';
						}
					}
				}
			}
		}
	}

	int ta = 0;

	for(int i = R-1; i >= 0; i--) {
		for(int j = 0; j < C; j++) {
			if(b[i][j] == '0') {
				ta += 0;
			} else if(b[i][j] == '1') {
				ta += 1;
			}
			if(j == C-1 && ta == C) {
				isLoop = 1;
				i = -5;
				j = C+1;
			} else if(j == C-1 && ta < C) {
				ta = 0;
				isLoop = 0;
			}
		}
	}
}

int main() {
	cin >> R >> C;

	for(int i = 0; i < R; i++) {
		for(int j = 0; j < C; j++) {
			cin >> b[i][j]; 
		}
	}
	
	do {
		eksekusi();
	} while (isLoop > 0);
	

	if(isLoop == 0) {
		for(int i = 0; i < R; i++) {
			for(int j = 0; j < C; j++) { 
				cout << b[i][j];
			}
			cout << endl;
		}
	} 
}
