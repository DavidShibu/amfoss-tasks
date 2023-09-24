print "Enter a number (n): "
n = gets.chomp.to_i

puts "The prime numbers up to #{n} are:"

(2..n).each do |i|
  is_prime = (2..Math.sqrt(i)).none? { |j| i % j == 0 }
  puts i if is_prime
end