#include <iostream>
#include <iomanip>
using namespace std;

int partition(double arr[], int low, int high, int w[]) {
	double pivot = arr[high];
	int i = (low - 1);
	
	for(int j = low; j <= high - 1; j++) {
		if(arr[j] <= pivot) {
			i++;
			swap(arr[i], arr[j]);
			swap(w[i], w[j]);
		}
	}
	
	swap(arr[i+1], arr[high]);
	swap(w[i+1], w[high]);
	return i+1;
}

void quickSort(double arr[], int low, int high, int w[]) {
	if(low < high) {
		int pi = partition(arr, low, high, w);
		
		quickSort(arr, low, pi-1, w);
		quickSort(arr, pi + 1, high, w);
	}

}

int main() {
	int n, x, xCount = 0;
	double price, result = 0;
	
	cin >> n >> x;
	
	double arr[n];
	int w[n];
	int c[n];
	
	for(int i = 0; i < n; i++) {
		cin >> w[i];
	}
	
	for(int i = 0; i < n; i++) {
		cin >> c[i];
	}
	
	for(int i = 0; i < n; i++) {
		price = static_cast<double>(c[i]) / w[i];
		arr[i] = price;
	}
	
	quickSort(arr, 0, n-1, w);
	
	for(int i = n-1; i >= 0; i--) {
		for(int j = 0; j < w[i]; j++) {
			if(xCount < x) {
				result += arr[i];
				xCount += 1;
			}
		}
	}
	
	cout << fixed << setprecision(5) << result << endl;
}
