#include <cstdio>
#include <string>
using namespace std;

int main() {
	string s = "Pak Dengklek berternak";
	string t1 = "Dengklek";
	string t2 = "pak";
	string t3 = "klek";

	printf("%lu\n", s.find(t1)); //4
	printf("%lu\n", s.find(t2)); //-1 (takditemukan)
	printf("%lu\n", s.find(t3)); //8

	printf("%s\n", s.c_str());
}
