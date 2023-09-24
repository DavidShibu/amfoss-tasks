#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number (n): ";
    cin >> n;

    cout << "The prime numbers up to " << n << " are:" << endl;

    for (int i = 2; i <= n; i++) {
        bool a = true;
        for (int j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                a = false;
                break;
            }
        }
        if (a) {
            cout << i << " ";
        }
    }

    return 0;
}
