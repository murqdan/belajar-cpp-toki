#include <iostream>
using namespace std;

int main() {
    int N = 3;

	// 1 -> 1,7
	// 2 -> 2,6
	// 3 -> 3,5
	// 4 -> 4,4
	// 5 -> 5,3
	// 6 -> 6,2
	// 7 -> 7,1

    for (int i = 1; i <= N; i++) {
		for (int j = 1; j <= N; j++) {
            if (j == i || j == (N-i)+1) {
                cout << "*";
            } else {
                cout << ".";
            }
        }
        cout << endl;
    }
}
