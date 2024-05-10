#include <iostream>
using namespace std;

int toPositive(int j) {
	if(j < 0) {
		return j+(j*-2);
	} else {
		return j;
	}
}
 
int main() {
	int n, x, h;
	cin>>n>>x;
	int diff;
	int result = 0;
	
	for(int i = 1; i <= n; i++) {
		cin>>h;
		if(i == 1) {
			result = h;
			diff = toPositive(x-h);
		} else if(toPositive(x-h) < diff) {
			diff = toPositive(x-h);
			result = h;
		} else if(toPositive(x-h) == diff) {
			if(h < result) {
				result = h;
			}
		}
	}
	
	cout << result << endl;
}
