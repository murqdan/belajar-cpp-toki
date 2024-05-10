#include <iostream>
#include <string>
using namespace std;

int n, q;

int binarySearch(string arr[], string key) {
    int left = 0;
	int right = n-1;

    while (left<=right) {
		int mid = (left+right) / 2;

        if (key < arr[mid]) {
            right = mid-1;
        } else if (key>arr[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

	return -1;
}

int main() {
    cin >> n >> q;
    
    string name[100001];
    string number[100001];
    for(int i = 0; i < n; i++) {
        cin >> name[i] >> number[i];
    }
    
    string searchName;
    for(int j = 0; j < q; j++) {
        cin >> searchName;
        
        int foundIndex = binarySearch(name, searchName);
        
        if (foundIndex != -1) {
            cout << number[foundIndex] << endl;
        } else {
            cout << "NIHIL" << endl;
        }
    }
    return 0;
}
