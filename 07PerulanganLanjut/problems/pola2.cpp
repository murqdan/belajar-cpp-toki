#include <cstdio>

int main() {
	int N;
	scanf("%d", &N);

	for(int i = 1; i <= N; i++) {
		for(int j = i; j < N; j++) {
			printf(" ");
		}
		
		for(int z = 0; z <= i; z++) {
			if(z != i) {
				printf("*");
			}
			
			if(z == i) {
				printf("\n");
			}
		}
	}
}
