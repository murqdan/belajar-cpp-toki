#include <cstdio>

int main() {
	int N;
	scanf("%d", &N);
	int arr[N];
	int arrC[1001];
	
	for(int i = 0; i < 1001; i++) {
		arrC[i] = 0;
	}

	for(int i = 0; i < N; i++) {
		scanf("%d", &arr[i]);
		arrC[arr[i]]++;
	}
	
	int higher = -1;
	
	for(int i = 0; i < N; i++) {
		if(arrC[arr[i]] > higher) {
			higher = arrC[arr[i]];
		}
	}

	int finalHigher = -1;
	
	for(int i = 0; i < N; i++) {
		if(arrC[arr[i]] == higher) {
			if(arr[i] > finalHigher) {
				finalHigher = arr[i];
			}
		}
	}

	printf("%d\n", finalHigher);
}
