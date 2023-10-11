#include <iostream>
using namespace std;

int main() {
	string S1, S2, S3, S4;
	
	cin >> S1 >> S2 >> S3 >> S4;
	int s2length = S2.length();
	int s3length = S3.length();
	
	S1.erase(S1.find(S2), s2length);
	S1.insert(S1.find(S3)+s3length, S4);
	
	cout << S1 << endl;
}
