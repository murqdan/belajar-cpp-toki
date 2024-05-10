#include <iostream>
using namespace std;

int main() {
	int n,m,k;
	cin>>n>>m>>k;
	
	int board[n][m];
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < m; j++) {
			cin>>board[i][j];
		}
	}

	for(int j = 0; j < m; j++) {
		for(int i = 0; i < n; i++) {
			int r=1, l=1, u=1, d=1;

			if(j+1 < m) {
				r = board[i][j+1];
			}
			if(j > 0) {
				l = board[i][j-1];
			}
			if(i > 0) {
				u = board[i-1][j];
			}
			if(i+1 < n) {
				d = board[i+1][j];
			} 

			if((r*l*u*d) == k) {
				cout << i+1 << " " << j+1 << endl;
				return 0;
			}
		}
	}
	
	cout << 0 << " " << 0 << endl;
	return 0;
}
