#include <cstdio>

int main() {
	int N;
	scanf("%d", &N);
	int arr[N];
	int arrC[N];
	int higherIndex[N];

	for(int i = 0; i < N; i++) {
		scanf("%d", &arr[i]);
	}

	for(int i = 0; i < N; i++) {
		for(int j = i+1; j < N; j++) {
			if(arr[i] == arr[j]) {
				arrC[i] += 1;
			}
		}
	}

	int higherValue = arrC[0];

	for(int i = 0; i < N-1; i++) {
		if(i == 0) {
			higherIndex[0] = i;
		}
		
		if(higherValue < arrC[i+1]) {
			higherIndex[0] = i+1;
			higherValue = arrC[i+1];
		}
	}
	
	for(int i = 0; i < N-1; i++) {
		if(higherValue == arrC[i] && i != higherIndex[0]) {
			higherIndex[1] = i;
		}
	}

	if(arr[higherIndex[0]] < arr[higherIndex[1]]) {
		printf("%d\n", arr[higherIndex[1]]);
	} else {
		printf("%d\n", arr[higherIndex[0]]);
	}
} 
