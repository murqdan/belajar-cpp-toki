#include <cstdio>

int fibonacci(int N) {
	if (N <= 1) {
		return N;
	} else {
		return fibonacci(N-1) + fibonacci(N-2);
	}
}

int main() {
	int input;
	scanf("%d", &input);
	printf("%d\n", fibonacci(input));
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
// 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11.
