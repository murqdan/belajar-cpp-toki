#include <cstdio>

int main() {
	int N;
	scanf("%d", &N);

	for(int i = 1; i <= N; i++) {
		if(i % 10 == 0) {
			continue;
		} else if(i == 42) {
			printf("ERROR\n");
			break;
		}
	
		printf("%d\n", i);
	}
}
