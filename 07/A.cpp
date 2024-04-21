#include <iostream>
using namespace std;

int main() {
    int jantan[4] = {0, 10, 50, 60};
    int betina[4] = {7, 80, 9, 40};

    for (int i = 0; i < 4; i++) {
        int biaya_jantan = 0;
        int biaya_betina = 0;

        // hitung biaya membeli bebek-bebek jantan
        if (jantan[i] < 10) {
            biaya_jantan = jantan[i]*100000;
        } else if (jantan[i] >= 10 && jantan[i] <= 50) {
            biaya_jantan = jantan[i]*75000;
        } else {
            biaya_jantan = jantan[i]*50000;
        }
        
        // hitung biaya membeli bebek-bebek  betina
        if (betina[i] < 10) {
            biaya_betina = betina[i]*100000;
        } else if (betina[i] >= 10 && betina[i] <= 50) {
            biaya_betina = betina[i]*75000;
        } else {
            biaya_betina = betina[i]*50000;
        }

        // cetak total biaya
        cout << biaya_jantan + biaya_betina << endl;
        biaya_jantan = 0;
        biaya_betina = 0;
    }
}
