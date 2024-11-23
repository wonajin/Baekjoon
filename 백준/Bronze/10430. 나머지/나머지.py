# 입력
A, B, C = map(int, input().split())

# 출력
print((A + B) % C)
print(((A % C) + (B % C)) % C)
print((A * B) % C)
print(((A % C) * (B % C)) % C)
