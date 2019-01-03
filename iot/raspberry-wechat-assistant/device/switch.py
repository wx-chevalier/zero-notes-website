#!/usr/bin/env python
# encoding: utf-8

import RPi.GPIO
import time

# 按钮输出针脚连接的GPIO口
btnR = 21

RPi.GPIO.setmode(RPi.GPIO.BCM)

# 按钮连接的GPIO针脚的模式设置为信号输入模式，同时默认拉高GPIO口电平，
# 当GND没有被接通时，GPIO口处于高电平状态，取的的值为1
# 注意到这是一个可选项，如果不在程序里面设置，通常的做法是通过一个上拉电阻连接到VCC上使之默认保持高电平
RPi.GPIO.setup(btnR, RPi.GPIO.IN, pull_up_down=RPi.GPIO.PUD_UP)

try:

    while True:
        time.sleep(0.01)

        # 检测按钮1是否被按下，如果被按下(低电平)，则输出低电平
        if (RPi.GPIO.input(btnR) == 0):
            print(1)

except KeyboardInterrupt:
    pass

RPi.GPIO.cleanup()
