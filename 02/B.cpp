#include <iostream>
#include <cmath>
using namespace std;
typedef long long ll;

bool isPrime(ll n) {
	if(n == 1) {
		return false;
	} else if(n == 2 || n == 3) {
		return true;
	}

	for(ll i = 2; i <= sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	
	return true;
}

int main () {
	ll t, k;
	ll prime[100000];
	ll save = 0;
	
	cin >> t;
	
	for(ll i = 1; i <= 1000000; i++) {
		if(isPrime(i)) {
			prime[save] = i;
			save++;
		}
	}
	
	for(ll i = 1; i <= t; i++) {
		cin >> k;
		cout << prime[k-1] << endl;
	}
}
