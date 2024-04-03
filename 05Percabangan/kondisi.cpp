#include <cstdio>

int main() {
	int x;
	scanf("%d", &x);

	if(x > 0) {
		if(x % 2 == 0) {
			printf("positif dan genap\n");
		} else {
			printf("positif dan ganjil\n");
		}
	} else if(x == 0) {
		printf("nol\n");
	} else {
		printf("negatif\n");
	}
}
