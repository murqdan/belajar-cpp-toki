#include <iostream>
#include <string>
using namespace std;

int partition(string arr[], int low, int high) {
	string pivot = arr[high];
	int i = (low - 1);
	
	for(int j = low; j <= high - 1; j++) {
		if(arr[j].length() <= pivot.length()) {
			if(arr[j].length() == pivot.length()) {
				for(int k = 0; k < arr[j].length(); k++) {
					if(arr[j][k] < pivot[k]) {
						i++;
						swap(arr[i], arr[j]);
						k = 100;
					} else if(arr[j][k] > pivot[k]) {
						k = 100;
					}
				}
			} else if(arr[j].length() < pivot.length()){
				i++;
				swap(arr[i], arr[j]);
			}
		}
	}
	
	swap(arr[i+1], arr[high]);
	return i+1;
}

void quickSort(string arr[], int low, int high) {
	if(low < high) {
		int pi = partition(arr, low, high);
		
		quickSort(arr, low, pi-1);
		quickSort(arr, pi + 1, high);
	}

}

int main() {
    string list[500];
    int n;
    
    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> list[i];
    }
    
    quickSort(list, 0, n-1);
    
    for(int i = 0; i < n; i++) {
        cout << list[i] << endl;
    }

    return 0;
}
