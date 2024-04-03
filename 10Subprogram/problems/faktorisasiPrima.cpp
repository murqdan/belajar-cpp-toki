#include <iostream>

void factorize(int n) {
    for (int i = 2; i <= n; i++) { // 1
        int count = 0; // 4
        while (n % i == 0) {
            n /= i;
            count++;
        }
        if (count > 0) {
            std::cout << i;
            if (count > 1) {
                std::cout << "^" << count;
            }
            if (n > 1) {
                std::cout << " x ";
            }
        }
    }
    std::cout << std::endl; // 3^2 x 7 x 11
}

int main() {
    int N;
    std::cin >> N;
    factorize(N);
    return 0;
}
