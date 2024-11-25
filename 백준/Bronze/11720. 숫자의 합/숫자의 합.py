N = int(input())  # 숫자의 개수 입력
numbers = input()  # 공백 없이 숫자 입력

total = 0  # 합계를 저장할 변수 초기화

for digit in numbers:  # numbers의 각 문자를 순회
    total += int(digit)  # 각 문자를 정수로 변환 후 total에 더하기

print(total)  # 결과 출력
