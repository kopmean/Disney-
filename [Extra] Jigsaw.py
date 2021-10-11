'''Play Jigsaw gun'''
def match_direction(maps, current_pos, memo, direction):
    ''' find match direction piece and connect it
        WORD = 0
        UP = 1
        RIGHT = 2
        BOTTOM = 3
        LEFT = 4
    '''
    pos_x, pos_y = current_pos
    current_piece = maps[pos_y][pos_x]
    connect_text = current_piece[direction]
    next_piece = ''
    if direction == 3 and connect_text != '-':
        next_piece = search_direction(connect_text, 1, memo)
        pos_y += 1
    elif direction == 2 and connect_text != '-':
        next_piece = search_direction(connect_text, 4, memo)
        pos_x += 1
    if next_piece:
        maps[pos_y][pos_x] = next_piece
        if next_piece[2] != '-':
            return match_direction(maps, (pos_x, pos_y), memo, 2)
    return maps
def search_direction(find_txt, direction, memo):
    ''' search for direction piece
        WORD = 0
        UP = 1
        RIGHT = 2
        BOTTOM = 3
        LEFT = 4
    '''
    for item in memo:
        if find_txt == item[direction] and find_txt != '-':
            return item
    return -1
def main():
    ''' god pls help '''
    amount_of_row = int(input())
    amount_of_col = int(input())
    memo = []
    maps = [['' for i in range(amount_of_col)] for i in range(amount_of_row)]
    for _ in range(amount_of_row * amount_of_col):
        word, *direction = input().split()
        if direction[0] == '-' and direction[3] == '-':
            maps[0][0] = [word, *direction]
        memo.append([word, *direction])
    for row in range(amount_of_row):
        match_direction(maps, (0, row), memo, 2)
        match_direction(maps, (0, row), memo, 3)
    for rows in maps:
        text = ''
        for col in rows:
            text += col[0]
        print(text)
main()
