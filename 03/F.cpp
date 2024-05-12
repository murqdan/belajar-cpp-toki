#include <iostream>
using namespace std;

int main() {
	int n;
	cin >> n;
	string name[n];
	
	for(int i = 0; i < n; i++) {
		cin >> name[i];
		int z = 1;
		
		if(i != 0) {
			for(int j = 0; j < i; j++) {
				if(name[i] > name[j]) {
					z++;
				}
			}
		}
		
		cout << z << endl;
	}
	
}
