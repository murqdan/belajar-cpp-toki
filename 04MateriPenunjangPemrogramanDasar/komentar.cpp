#include <cstdio>

int main() {
	int a, b, c, x, hasil;

	// inisialisasi
	a = 1;
	b = 3;
	c = -2;

	// baca nilai x
	scanf("%d", &x);

	// hitung hasil fungsi
	hasil = a*x*x + b*x  + c;

	// cetak
	printf("ax^2 + bx + c = %d\n", hasil);
}
