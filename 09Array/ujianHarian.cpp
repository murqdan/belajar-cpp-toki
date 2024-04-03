#include <cstdio>

int main() {
int N;
scanf("%d", &N);
int grade[N];

int sum = 0;
for(int i = 0; i < N; i++) {
	scanf("%d", &grade[i]);
	sum+=grade[i];
}

int avg = 1;
avg+=sum/N;
sum=0;
for(int i=0; i<N; i++) {
	if(grade[i]>=avg) {
		sum++;
	}
}

printf("%d%d\n", avg, sum);
}
