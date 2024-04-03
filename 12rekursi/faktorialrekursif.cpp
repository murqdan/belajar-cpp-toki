#include <cstdio>

int faktorialrekursif(int x) {
	if (x == 1) {
		return 1;
	} else {
		return x * faktorialrekursif(x-1);
	}
}

int main() {
	int input;
	scanf("%d", &input);
	printf("%d\n", faktorialrekursif(input));
}
