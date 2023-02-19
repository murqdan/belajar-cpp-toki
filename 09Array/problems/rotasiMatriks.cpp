#include <cstdio>

int N, M;
int matriks[100][100];

int main() {
  scanf("%d%d", &N, &M);
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < M; j++) {
      scanf("%d", &matriks[i][j]);
    }
  }

  for (int i = 0; i < M; i++) {
    for (int j = N-1; j >= 0; j--) {
      printf("%d", matriks[j][i]);
      if (j > 0) {
        printf(" ");
      } else {
        printf("\n");
      }
    }
  }
}
