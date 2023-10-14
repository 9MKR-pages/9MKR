from turtle import *
from random import *
speed(0)
for inf in range(100000):
    al=randint(0,100)
    if al<=33:
        for a in range(50):
            forward(al*2)
            left(a)
            dot(3)
            al=randint(0,100)
    elif al>=33:
        for b in range(50):
            forward(al*2)
            left(b)
            dot(6)
            al=randint(0,100)
    else:
        for c in range(50):
            forward(al*2)
            left(c)
            dot(9)
            al=randint(0,100)
