#include <cstdio>

int main() {
	int N;

	scanf("%d", &N);

	if(N > 0 && N % 2 == 0) {
		printf("positif\n");
	} else if(N < 0) {
		printf("negatif\n");
	} else {
		printf("nol\n");
	}
}
