from itertools import permutations

# 입력 처리
n = int(input())
numbers = list(map(int, input().split()))
ops_count = list(map(int, input().split()))  # 덧셈, 뺄셈, 곱셈, 나눗셈 개수

# 연산자 리스트 생성
ops = []
ops += ['+'] * ops_count[0]
ops += ['-'] * ops_count[1]
ops += ['*'] * ops_count[2]
ops += ['/'] * ops_count[3]

# 가능한 연산자 순열 생성
ops_permutations = set(permutations(ops, n - 1))

# 최댓값과 최솟값 초기화
max_result = -float('inf')
min_result = float('inf')

# 모든 연산자 순열에 대해 계산
for perm in ops_permutations:
    result = numbers[0]  # 첫 번째 숫자로 초기화
    for i in range(n - 1):
        if perm[i] == '+':
            result += numbers[i + 1]
        elif perm[i] == '-':
            result -= numbers[i + 1]
        elif perm[i] == '*':
            result *= numbers[i + 1]
        elif perm[i] == '/':
            if result < 0:  # 음수를 양수로 나눈 후 음수화
                result = -(-result // numbers[i + 1])
            else:
                result //= numbers[i + 1]
    
    # 최댓값, 최솟값 갱신
    max_result = max(max_result, result)
    min_result = min(min_result, result)

# 결과 출력
print(max_result)
print(min_result)
