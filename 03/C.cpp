#include <iostream>
using namespace std;

int main() {
    int luas_kandang = 12;
	int totbar = 1;

    while (totbar <= 3) {
        luas_kandang += 7;
        cout << luas_kandang << endl;

		totbar += 1;
    }
}
