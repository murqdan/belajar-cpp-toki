#include <cstdio>

int main() {
	int N;
	int result = 0;
	scanf("%d", &N);
	
	for(int i = 0; i < N; i++) {
		int Bi;
		scanf("%d", &Bi);
		result += Bi;
	}

	printf("%d\n", result);
}
