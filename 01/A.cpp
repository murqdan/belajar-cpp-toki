#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
	int T, N, M, s1, s2, s3, idx;
	string id, c;
		
	cin >> T;
		
	while(T--) {
		cin >> N;
		cin >> M;
		cin >> id;
		int cohort[N];

		for(int i = 0; i < N; i++) {
			cin >> c >> s1 >> s2 >> s3;
			
			cohort[i] = s1 + (s2*1000) + (s3*10000000);
			
			if(id == c) {
				idx = cohort[i];
			}
		}
		
		sort(cohort, cohort+N, greater<int>());
		
		bool result = false;
		for(int i = 0; i < M; i++) {
			if(cohort[i] == idx) {
				result = true;
			}
		}
		
		if(result) {
			cout << "YA" << endl;
		} else {
			cout << "TIDAK" << endl;
		}
	}
}
