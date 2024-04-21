#include <iostream>
using namespace std;

int biaya(int bektot) {
    if (bektot < 10) {
        return bektot*100000;
    } else if (bektot >= 10 && bektot <= 50) {
        return bektot*75000;
    } else {
        return bektot*50000;
    }
}

int main() {
    int jantan[4] = {0, 10, 50, 60};
    int betina[4] = {7, 80, 9, 40};

    for (int i = 0; i < 4; i++) {
        int biaya_jantan = biaya(jantan[i]);
        int biaya_betina = biaya(betina[i]);

        cout << biaya_jantan + biaya_betina << endl;
        biaya_jantan = 0;
        biaya_betina = 0;
    }
}
