#include <cstdio>

int main() {
	int N, M, P;
	scanf("%d%d%d", &N,&M,&P);
	
	int A[N][M], B[M][P], C[N][P];
	
	for(int i = 0; i < N; i++) {
		for(int j = 0; j < M; j++) {
			scanf("%d", &A[i][j]);
		}
	}

	for(int i = 0; i < M; i++) {
		for(int j = 0; j < P; j++) {
			scanf("%d", &B[i][j]);
		}
	}

	for(int i = 0; i < N; i++) {
		for(int j = 0; j < P; j++) {
			C[i][j] = 0;
		}
	}

	for(int i = 0; i < N; i++) {
		for(int j = 0; j < P; j++) {
			for(int k = 0; k < M; k++) {
				C[i][j] += A[i][k] * B[k][j]; 
			}
		}
	}
	
	for(int i = 0; i < N; i++) {
		for(int j = 0; j < P; j++) {
			printf("%d", C[i][j]);
			
			if (j < P-1) {
				printf(" ");
			} else {
				printf("\n");
			}
		}
	}
}
