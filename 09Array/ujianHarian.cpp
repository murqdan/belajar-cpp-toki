#include <cstdio>

int a[10], b[10];

int main() {
    for (int i = 0; i < 10; i++) {
        a[i] = (3*i) % 10;
    }
    for (int i = 0; i < 10; i++) {
        b[i] = 9*a[((i+3) % 10)] + 5%10;
    }
    printf("%d\n", b[8]);
}
