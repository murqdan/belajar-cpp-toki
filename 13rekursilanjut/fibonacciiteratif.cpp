#include <cstdio>

int main() {
	int sebelum = 0;
	int input;
	scanf("%d", &input);

	if(input <= 1) {
		printf("%d\n", input);
	} else {
		int sesudah = 1;
		int hasil = 0;
		for(int i = 1; i < input; i++) {
			hasil = sebelum+sesudah;
			int temp = sesudah;
			sebelum=temp;
			sesudah=hasil;
		}
		printf("%d\n", hasil);
	}
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
// 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11.
