#include <iostream>
using namespace std;

bool kir(int a[][75], int b[][75], int n) {
	int result = 0;
	
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(a[i][j] == b[n-j-1][n-i-1]) {
				result++;
			} else {
				return 0;
			}
		}
	}
	
	if(result == n*n) {
		return true;
	} else {
		return false;
	}
}

bool kan(int a[][75], int b[][75], int n) {
	int result = 0;
	
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(a[i][j] == b[j][i]) {
				result++;
			} else {
				return 0;
			}
		}
	}
	
	if(result == n*n) {
		return true;
	} else {
		return false;
	}
}

bool vertikal(int a[][75], int b[][75], int n) {
	int result = 0;
	
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(a[i][j] == b[i][n-j-1]) {
				result++;
			} else {
				return 0;
			}
		}
	}
	
	if(result == n*n) {
		return true;
	} else {
		return false;
	}
}

bool horisontal(int a[][75], int b[][75], int n) {
	int result = 0;
	
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(a[i][j] == b[n-1-i][j]) {
				result++;
			} else {
				return 0;
			}
		}
	}
	
	if(result == n*n) {
		return true;
	} else {
		return false;
	}
}

bool identik(int a[][75], int b[][75], int n) {
	int result = 0;
	
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(a[i][j] == b[i][j]) {
				result++;
			} else {
				break;
			}
		}
	}
	
	if(result == n*n) {
		return true;
	} else {
		return false;
	}
}

void createMatrix(int n, int x[][75]) {
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			cin >> x[i][j];
		}
	}
}

int main() {
	int n;
	int a[75][75];
	int b[75][75];
	
	cin >> n >> n;
	createMatrix(n, a);

	cin >> n >> n;
	createMatrix(n, b);
	
	if(identik(a, b, n)) {
		cout << "identik" << endl;
	} else if(horisontal(a, b, n)) {
		cout << "horisontal" << endl;
	} else if(vertikal(a, b, n)) {
		cout << "vertikal" << endl;
	} else if(kan(a, b, n)) {
		cout << "diagonal kanan bawah" << endl;
	} else if(kir(a, b, n)) {
		cout << "diagonal kiri bawah" << endl;
	} else {
		cout << "tidak identik" << endl;
	}
}
