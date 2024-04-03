#include <cstdio>

int main() {
	int arr[100];
	int i = 0;
	
	while(scanf("%d", &arr[i]) != EOF) {
		i++;
	}

	while(i--) {
		printf("%d\n", arr[i]);
	} 
}
