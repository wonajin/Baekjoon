
A, B, C = map(int, input().split())

D = int(input())

total_seconds = A * 3600 + B * 60 + C + D

end_hour = (total_seconds // 3600) % 24
end_minute = (total_seconds // 60) % 60
end_second = total_seconds % 60

print(end_hour, end_minute, end_second)
