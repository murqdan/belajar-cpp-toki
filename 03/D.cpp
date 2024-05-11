#include <iostream>
#include <cmath>
using namespace std;

int n, q, x, y;
int duck[100000];

int duckBinarySearch(int arr[], int key) {
    int left = 0;
	int right = n-1;
	int mid = key;
	
    while (left <= right) {
		mid = (left + right) / 2;

        if (key < arr[mid]) { 
            right = mid - 1; 
        } else if (key > arr[mid]) {
            left = mid + 1;
        } else {
			left = mid + 1;
		}
    }

	if(key < arr[mid]) {
		return mid - 1;
	} else {
		return mid;
	}
}

int duckWeight(int ex, int ye){
	int exShortcut = duckBinarySearch(duck, ex);
	int yeShortcut = duckBinarySearch(duck, ye);

	return yeShortcut-exShortcut;
}

int main() {
	cin >> n;
	for(int i = 0; i < n; i++) {
		cin>>duck[i];
	}
	
	cin >> q;
	for(int j = 0; j < q; j++) {
		cin >> x >> y;
		cout << duckWeight(x, y) << endl;
	}
	
	return 0;
}
