#include <iostream>
using namespace std;

int main() {
    int luas[4][3] = {
        {225 * 335, 299 * 278, 300 * 250},
        {215 * 394, 144 * 718, 300 * 290},
        {200 * 400, 240 * 333, 142 * 619},
        {314 * 298, 411 * 198, 333 * 222}
        // 0,0   0,1   0,2
        // 1,0   1,1   1,2
        // 2,0   2,1   2,2
        // 3,0   3,1   3,2
    };

    int harga_jual[3] = {100, 120, 150};
	int result = 0;
	
    for(int j = 0; j < 3; j++) {
		for(int i = 0; i < 4; i++) {
			
			result += (luas[i][j] * harga_jual[j]);
			if(i == 3) {
				cout << result << endl;
				result = 0;
			} 
			if(i == 3 && j == 2) {
				break;
			}
		}
	}
}
