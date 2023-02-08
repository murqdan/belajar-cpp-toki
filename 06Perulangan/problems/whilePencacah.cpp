#include <cstdio>

int main() {
	int angka;
	int result = 0;

	while(scanf("%d", &angka) != EOF) {
		result += angka;
	}

	printf("%d\n", result);
}
