#include <cstdio>

int main() {
	int N;
	int count = 0;
	scanf("%d", &N);

	for(int i = 0; i < N; i++) {
		for(int j = 0; j <= i + 1; j++) {
			if(j == i + 1) {
				printf("\n");
			} else {
				if(count == 9) {
					printf("%d", count);
					count = 0;
				} else {
					printf("%d", count);
					count++;
				}
			}
		}
	}
}
