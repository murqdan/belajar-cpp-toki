#include <iostream>
using namespace std;

int s[5];
bool result;
int t, n, jP;
pair <int, int> p[10];

void awake(int numMatch, int newSk[]) {
	if(numMatch >= jP) {
		bool same = true;
		for(int i = 0; i < n; i++) {
			if(newSk[i] != s[i]) {
				same = false;
				break;
			}
		}
		
		if(same == true) {
			result = true;
		}
		
		return;
	}
	
	int a = p[numMatch].first;
	int b = p[numMatch].second;
	
	int newCS[n];
	
	for(int i = 0; i < n; i++) {
		newCS[i] = newSk[i];
	}
	newCS[a] += 3;
	awake(numMatch + 1, newCS);
	
	for(int i = 0; i < n; i++) {
		newCS[i] = newSk[i];
	}
	newCS[b] += 3;
	awake(numMatch + 1, newCS);
	
	for(int i = 0; i < n; i++) {
		newCS[i] = newSk[i];
	}
	newCS[a] += 1;
	newCS[b] += 1;
	awake(numMatch + 1, newCS);
	
	return;
}

int main() {
	cin >> t;
	
	for(int z = 0; z < t; z++) {
		result = false;
		
		cin >> n;
		
		for(int i = 0; i < n; i++) {
			cin >> s[i];
		}
		
		jP = 0;
		
		for(int i = 0; i < n; i++) {
			for(int j = i+1; j < n; j++) {
				p[jP] = {i, j};
				jP++;
			}
		}
		
		int newS[n];
		
		fill(newS, newS+n, 0);
		
		awake(0, newS);
		
		if(result == true) {
			cout << "YES" << endl;
		} else {
			cout << "NO" << endl;
		}
	}
}
