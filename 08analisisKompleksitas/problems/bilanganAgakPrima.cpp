#include <cstdio>

int main() {
	int N, x, tolerance = 0;
	scanf("%d", &N);

	for(int i = 1; i <= N; i++) {
		scanf("%d", &x);

		if(x < 4) {
			printf("YA\n");
		} else {
			for(int j = 1; j * j <= x; j++) {
				if(x % j == 0) {
					tolerance++;
					if(tolerance > 2) {
						printf("BUKAN\n");
						break;
					}
				}
			}
		}
		
		if(x > 3 && tolerance < 3) {
			printf("YA\n");
			tolerance = 0;
		} else if (x > 3) {
			tolerance = 0;
		}
	}
}
