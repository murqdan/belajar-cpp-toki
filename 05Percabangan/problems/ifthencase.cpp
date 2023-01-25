#include <cstdio>

int main() {
	int N;
	scanf("%d", &N);

	if(N < 10) {
		printf("satuan\n");
	} else if( N < 100) {
		printf("puluhan\n");
	} else if( N < 1000) {
		printf("ratusan\n");
	} else if( N < 10000) {
		printf("ribuan\n");
	} else if( N < 100000) {
		printf("puluhribuan\n");
	}
}
