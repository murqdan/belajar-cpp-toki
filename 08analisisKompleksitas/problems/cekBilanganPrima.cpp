#include <cstdio>

int main() {
	int N, x;
	scanf("%d", &N);

	for(int i = 1; i <= N; i++) {
		scanf("%d", &x);

		for(int j = 2; j * j <= x || x == 1; j++) {
			if(x % j == 0 || x == 1) {
				printf("BUKAN\n");
				x = 0;
				break;
			}
		}
		
		if(x != 0) {
			printf("YA\n");
		}
	}
}
