isPrime :: Integer -> Bool
isPrime n
    | n < 2     = False
    | otherwise = all (\x -> n `mod` x /= 0) [2..isqrt n]
    where isqrt = floor . sqrt . fromIntegral

a :: Integer -> [Integer]
a n = filter isPrime [2..n]

main :: IO ()
main = do
    putStrLn "Enter a number : "
    input <- getLine

    let n = read input :: Integer

    if n < 2
        then putStrLn "No prime numbers below 2"
        else do
            putStrLn $ "Prime numbers below" ++ show n ++ " are:"
            printPrimes (a n)

printPrimes :: [Integer] -> IO ()
printPrimes [] = return ()
printPrimes (x:xs) = do
    print x
    printPrimes xs