#include <stdio.h>

int main() {
    int n;
    printf("Enter a number (n): ");
    scanf("%d", &n);

    printf("The prime numbers up to %d are:\n", n);

    for (int i = 2; i <= n; i++) {
        int a = 1;
        for (int j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                a = 0;
                break;
            }
        }
        if (a) {
            printf("%d ", i);
        }
    }

    return 0;
}
