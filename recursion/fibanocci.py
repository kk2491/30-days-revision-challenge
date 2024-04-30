

def n_fibanocci_recursion(num):

    if num <= 2:
        return 1
    else: 
        return n_fibanocci_recursion(num - 1) + n_fibanocci_recursion(num - 2)

if __name__ == "__main__":
    num = 10
    print(n_fibanocci_recursion(num))

# num = 4
# n_fibanocci_recursion(4)
#   n_fibanocci_recursion(3) + n_fibanocci_recursion(2)

# n_fibanocci_recursion(3)
#   n_fibanocci_recursion(2) + n_fibanocci_recursion(1)
    
# n_fibanocci_recursion(2)
    
# n_fibanocci_recursion(2) 
    
# n_fibanocci_recursion(1)