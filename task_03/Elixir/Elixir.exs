defmodule PrimeNumbers do
  def is_prime(num) do
    if num < 2 do
      false
    else
      Enum.all?(1..num, fn i -> rem(num, i) != 0 end) && rem(num, 2) != 0
    end
  end

  def find_primes_up_to_n(n) do
    Enum.filter(1..n, &is_prime/1)
  end

  def print_primes(primes) do
    Enum.each(primes, &IO.puts(&1))
  end
end

defmodule Main do
  def run do
    IO.puts "Enter a number (n): "
    n = String.trim(IO.gets(""))

    case String.to_integer(n) do
      {:ok, n} when n >= 2 ->
        primes = PrimeNumbers.find_primes_up_to_n(n)
        IO.puts "The prime numbers up to #{n} are:"
        PrimeNumbers.print_primes(primes)

      {:ok, n} when n < 2 ->
        IO.puts "There are no prime numbers less than 2."

      _ ->
        IO.puts "Invalid input. Please enter a positive integer."
    end
  end
end
Main.run()