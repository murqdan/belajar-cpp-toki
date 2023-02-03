#include <cstdio>
#include <math.h>

int main() {
	double N;
	long int F, C;

	scanf("%lf", &N);
	
	if (N == trunc(N)) {
		N = trunc(N);
		printf("%.0lf %.0lf\n", N,N);
	} else if(N > 0) {
		F = trunc(N);
		C = trunc(N) + 1;
		printf("%ld %ld\n", F, C);
	} else {
		C = trunc(N);
		F = trunc(N) - 1;
		printf("%ld %ld\n", F, C);
	}
} 
