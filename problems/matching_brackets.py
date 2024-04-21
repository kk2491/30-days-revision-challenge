
def matching_brackets(input_string):

    open_brackets = ["(", "{", "["]
    close_brackets = [")", "}", "]"]
    bracket_tracker = []
    counter = 0
    is_matching = True

    for each_char in input_string:
        if each_char in open_brackets:
            bracket_tracker.append(each_char)
            counter = counter + 1
        
        elif each_char in close_brackets:
            if len(bracket_tracker) == 0:
                is_matching = False
                break

            popped_bracket = bracket_tracker.pop()
            closed_bracket_index = close_brackets.index(each_char)
            print(popped_bracket)

            if open_brackets[closed_bracket_index] != popped_bracket:
                is_matching = False
                break

    return is_matching

if __name__ == "__main__":
    input_string = "([]()hello)]"
    is_matching = matching_brackets(input_string)
    print("matching brackets => ", is_matching)