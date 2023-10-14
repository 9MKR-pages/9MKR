from turtle import *
def triangle(x,y):
    speed(200)
    up()
    goto(x,y)
    down()
    c=400
    n=c
    for i in range(3):
        for i in range(10):
            forward(n)
            left(180)
            forward(n)
            n=n-c/10
            right(120)
            forward(c/10)
            right(60)
        n=c
        right(120)
    r=0
    v=0
    b=1
    bleu=b
    a=11
    n=c
    for i in range(11):
        for i in range(a):
            down()
            color(r,v,b)
            dot(15)
            up()
            forward(c/10)
            v=v+0.1
            b=b-0.1
        a=a-1
        left(120)
        up()
        forward(c/10)
        left(60)
        forward(n)
        n=n-c/10
        left(180)
        r+=0.1
        v=0
        b=bleu-0.1
        bleu=b
        
                
triangle(-100,-50)
