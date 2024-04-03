#include <iostream>
using namespace std;

int main() {
    int jantan = 0, betina = 0;
    int tanggal = 1;

    while (betina >= jantan) {
        jantan += 1;
        betina += tanggal;
        
        tanggal++;
        if(betina > jantan*10) {
			betina = 0;
		}
    }

    cout << tanggal << endl;
}
