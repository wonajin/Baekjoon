from itertools import combinations

# 입력 받기
N, M = map(int, input().split())  # 카드의 수와 목표 값 M
cards = list(map(int, input().split()))  # 카드 숫자들

# 최대합을 저장할 변수
max_sum = 0

# 3개의 카드를 고르는 모든 조합을 계산
for combo in combinations(cards, 3):
    current_sum = sum(combo)
    # 만약 합이 M을 넘지 않으면
    if current_sum <= M:
        # 가장 큰 합을 찾기
        max_sum = max(max_sum, current_sum)

# 결과 출력
print(max_sum)
