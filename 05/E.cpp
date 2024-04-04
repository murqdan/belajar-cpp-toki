#include <iostream>
using namespace std;

int main() {
    int N = 10;

    for (int i = 1; i <= N; i++) {
        // cetak i buah "*"
        for (int j = 0; j < i; j++) {
            cout << "*";
        }
		
        // sisanya, cetak "."
        for (int k = 0; k < N - i; k++) {
			cout << ".";
        }

        cout << endl;
    }
}
