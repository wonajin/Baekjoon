import math

# 테스트 케이스 수 입력
T = int(input())

for _ in range(T):
    # 한 줄에 입력받기
    x1, y1, r1, x2, y2, r2 = map(int, input().split())

    # 중심 거리 계산
    d = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    # 두 원이 완전히 일치
    if d == 0 and r1 == r2:
        print(-1)
    # 두 원이 만나지 않음
    elif d > r1 + r2 or d < abs(r1 - r2):
        print(0)
    # 두 원이 접함
    elif d == r1 + r2 or d == abs(r1 - r2):
        print(1)
    # 두 원이 두 점에서 교차
    else:
        print(2)

        