#include <cstdio>

int faktorial(int x) {
	int result = 1;
	for(int i = 2; i <= x; i++) {
		result *= i;
	}
	return result;
}

int main() {
	int input;
  scanf("%d", &input);
	printf("%d\n", faktorial(input));
}
