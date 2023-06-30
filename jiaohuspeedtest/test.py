import json

notes = list()
last = 0

for i in range(64, 1, -1):
    for j in range(10):
        last += i
        notes.append({'type': 'tap', 'time': [
                     last//256, last % 256, 256], 'x': -100})
        last += i
        notes.append({'type': 'tap', 'time': [
                     last//256, last % 256, 256], 'x': 100})

f = open('out.txt', 'w')
f.write(json.dumps(notes))
f.close()
