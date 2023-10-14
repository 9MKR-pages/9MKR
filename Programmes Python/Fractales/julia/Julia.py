from math import *
from PIL import Image

cx = -0.777
cy = 0.136

xmin = -1.5
xmax = 1.5

ymin = -1
ymax = 1

resx = 1920
resy = 1080

depth = 200
thres = 400

img = Image.new('RGB',(resx,resy))

for x in range(resx):
    for y in range(resy):
        x0 = xmin+((xmax-xmin)*x)/resx
        y0 = ymin+((ymax-ymin)*y)/resy
        conv = depth
        for k in range(depth):
            xn = x0**2-y0**2+cx
            yn = 2*x0*y0+cy
            x0 = xn
            y0 = yn
            if xn**2+yn**2 > thres:
                conv = k
                break
        color = (255*conv)//depth
        img.putpixel((x,y),(0,0,color))
img.show()
