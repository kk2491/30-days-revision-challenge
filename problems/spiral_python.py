# problem statement 

# input matrix
# 1, 2, 3
# 4, 5, 6
# 7, 8, 9

# output matrix 
# 1, 2, 3, 6, 9, 8, 7, 4, 5 

def spiral_conversion(input_matrix):

    output_list = []
    num_rows = len(input_matrix)
    num_cols = len(input_matrix[0])

    top = 0
    bottom = num_rows - 1
    left = 0 
    right = num_cols - 1

    while top <= bottom and left <= right:

        for col in range(left, right + 1):
            output_list.append(input_matrix[top][col])
        top = top + 1

        for row in range(top, bottom + 1):
            output_list.append(input_matrix[row][right])
        right = right - 1 

        if top <= bottom:
            for col in range(right, left - 1, -1):
                output_list.append(input_matrix[bottom][col])
            bottom = bottom - 1
        
        if left <= right:
            for row in range(bottom, top - 1, -1):
                output_list.append(input_matrix[row][left])
            left = left + 1

    print(output_list)

    return

if __name__ == "__main__":
    
    input_matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    spiral_conversion(input_matrix)