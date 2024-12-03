
scores = [int(input()) for _ in range(5)]


corrected_scores = [score if score >= 40 else 40 for score in scores]


average = sum(corrected_scores) // 5


print(average)
