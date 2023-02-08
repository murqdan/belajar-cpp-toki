#include <cstdio>

int main() {
	int N;
	long n,terbesar,terkecil;
	scanf("%d", &N);
	
	for(int i = 1; i <= N; i++) {
		scanf("%ld", &n);

		if(i == 1) {
			terbesar = n;
			terkecil = n;
		}
	
		if(n > terbesar) {
			terbesar = n;
		}

		if(n < terkecil) {
			terkecil = n;
		}
	}

	printf("%ld %ld\n", terbesar, terkecil);
}
