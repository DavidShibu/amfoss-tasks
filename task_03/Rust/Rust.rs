fn is_prime(num: u32) -> bool {
    if num < 2 {
        return false;
    }
    for i in 2..num {
        if num % i == 0 {
            return false;
        }
    }
    true
}

fn main() {
    let mut input = String::new();
    println!("Enter a number (n): ");
    std::io::stdin().read_line(&mut input).expect("Unable to read");

    let n: u32 = match input.trim().parse() {
        Ok(num) if num >= 2 => num,
        _ => {
            println!("Invalid input. Please enter a positive integer greater than or equal to 2.");
            return;
        }
    };

    println!("The prime numbers up to {} are:", n);

    for i in 2..=n {
        if is_prime(i) {
            print!("{} ", i);
        }
    }
}