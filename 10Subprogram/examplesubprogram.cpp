#include <cstdio>
#include <string>
using namespace std;

char buff[1001];
string pesan;

//subprogram
void bacaPesan() {
	printf("masukkan pesan: \n");
	scanf("%s", buff);
	pesan = buff;
}

//program utama
int main() {
	bacaPesan();
	printf("pesan = %s\n", pesan.c_str());
}
