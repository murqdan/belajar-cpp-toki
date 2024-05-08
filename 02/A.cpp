#include <iostream>
using namespace std;

long long efpebe(long long e, long long f) {
	if(f == 0) {
		return e;
	} else {
		return efpebe(f, e%f);
	}
}

int main() {
	long long a, b, c, d;
	cin >> a >> b >> c >> d;
	
	long long e, f;
	
	e = (a*d) + (b*c);
	f = b*d;	
	
	long long fpb;
	fpb = efpebe(e, f);

	e = e / fpb;
	f = f / fpb;
	
	cout << e << " " << f << endl;
}
