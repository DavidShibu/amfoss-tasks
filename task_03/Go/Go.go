package main

import "fmt"

func main() {
	var n int
	fmt.Print("Enter a number (n): ")
	_, err := fmt.Scan(&n)

	if err != nil || n < 2 {
		fmt.Println("Invalid input. Please enter a positive integer.")
		return
	}

	fmt.Printf("The prime numbers up to %d are:\n", n)

	for i := 2; i <= n; i++ {
		isPrime := true
		for j := 2; j*j <= i; j++ {
			if i%j == 0 {
				isPrime = false
				break
			}
		}
		if isPrime {
			fmt.Printf("%d ", i)
		}
	}
}