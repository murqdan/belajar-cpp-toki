#include <cstdio>

int main() {
	long int x1, y1, x2, y2;
	scanf("%ld %ld %ld %ld", &x1, &y1, &x2, &y2);
	
	long int x = x1 - x2; 
	long int y = y1 - y2;

	if(x < 0) {
		x = x + (x * -2);
	} if (y < 0) {
		y = y + (y * -2);
	}
	
	long int result = x + y;
	printf("%ld\n", result);
}
