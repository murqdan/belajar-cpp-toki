#include <cstdio>

int main() {
	int N, K;
	scanf("%d %d", &N, &K);

	for(int i = 1; i <= N; i++) {
		if(i % K != 0) {
			printf("%d", i);
			
			if(i < N) {
				printf(" ");
			} else {
				printf("\n");
			}
		} else {
			printf("*");

			if(i < N) {
				printf(" ");
			} else {
				printf("\n");
			}
		}
	}
}
