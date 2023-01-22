#include <cstdio>
#include <string>

using namespace std;

char buff[1001];

int main() {
	//scanf("%s", buff);
	scanf("%[^\n]", buff);
	
	string s = buff;
	printf("s=’%s’\n", s.c_str());
}
