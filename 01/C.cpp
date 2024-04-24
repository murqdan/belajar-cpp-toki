#include <iostream>
#include <string>
using namespace std;

string starFront(string compwordI, string pattwordF) {
	int judge = 0;
	int j = compwordI.length() - 1;
	string result;
	
	for(int i = pattwordF.length()-1; i > 0; i--) {	
		if(pattwordF[i] == compwordI[j]) {
			judge++;
			j--;
		} else {
			break;
		}
	}
	
	if(judge == pattwordF.length()-1) {
		result = compwordI;
	}
	
	return result;
}

string starBack(string compwordI, string pattwordB) {
	int judge = 0;
	int j = 0;
	string result;
	
	for(int i = 0; i < pattwordB.length()-1; i++) {	
		if(pattwordB[i] == compwordI[j]) {
			judge++;
			j++;
		} else {
			break;
		}
	}
	
	if(judge == pattwordB.length()-1) {
		result = compwordI; 
	}
	
	return result;
}

int main() {
	string pattword;
	int totword;
	string compword[100];
	
	cin >> pattword >> totword;
	for(int i = 0; i < totword; i++) {
		cin >> compword[i];
	}
	
	if(pattword.length() == 1) {
		for(int i = 0; i < totword; i++) {
			cout << compword[i] << endl;
		}
	} else if(pattword.length() > 1 && pattword[0] == '*') {
 		for(int i = 0; i < totword; i++) {
			string isNotEmpty = starFront(compword[i], pattword);
			
			if(isNotEmpty.length() > 0) {
				cout << isNotEmpty << endl;
			}
		}
	} else if(pattword.length() > 1 && pattword[pattword.length()-1] == '*') {
		for(int i = 0; i < totword; i++) {
			string isNotEmpty = starBack(compword[i], pattword);
			
			if(isNotEmpty.length() > 0) {
				cout << isNotEmpty << endl;
			}
		}
	} else {
		string newPattwordB, newPattwordF;
		
		int indexPattword = pattword.find('*');
		
		if (indexPattword != pattword.length()) {
			newPattwordB = pattword.substr(0, indexPattword + 1);
			newPattwordF = pattword.substr(indexPattword);
		}
		
		for(int i = 0; i < totword; i++) {
			string isNotEmpty = starFront(starBack(compword[i], newPattwordB), newPattwordF);
			
			if(isNotEmpty.length() > 0 && isNotEmpty.length() >= pattword.length()-1) {
				cout << isNotEmpty << endl;
			}
		}
	}
}
