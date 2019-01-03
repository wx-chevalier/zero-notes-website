# raspberry-wechat-assistant

## 微信信息抓取

```py
import itchat

itchat.auto_login()

itchat.send('Hello, filehelper', toUserName='filehelper')
```

```py
import led

#itchat 框架，关注 TEXT 消息
@itchat.msg_register(itchat.content.TEXT)
def text_reply(msg):
    #得到任何text消息就打开流水灯，最后原消息返回
    led.openLed()
    print(msg.text)
    return msg.text

itchat.auto_login(enableCmdQR=2)
itchat.run()
```

## 文字转语音

我们首先将本文转化为语音文件：

```py
def text2voice(text, delete=False):
    url = 'http://tts.baidu.com/text2audio?idx=1&tex={0}&cuid=baidu_speech_' \
          'demo&cod=2&lan=zh&ctp=1&pdt=1&spd=4&per=4&vol=5&pit=5'.format(text)
    # 直接播放语音
    os.system('mplayer "%s"' % url)

    if delete:
        os.system('rm -rf "%s"' % url)

text2voice(text)
```

使用 mplayer 实现语音播放,通过以下命令安装 mplayer:

```sh
$ sudo apt-get install mplayer

# 播放本地音乐
$ mplayer \xxx\xxx\xxx.mp3(绝对地址)

# 播放在线音乐
$ mplayer "URL"
```

然后使用命令行来播放语音：

## 语音录入与识别

首先我们要校验录入设备：

```sh
$ sudo apt-get update
$ sudo apt-get install flac alsa-oss

# 判断 USB 卡是否正确插入
$ lsusb
# Bus 001 Device 004: ID 1130:f211 Tenx Technology, Inc. TP6911 Audio Headset

# 查验录入设备
$ arecord -l

# 校正音量
$ alsamixer

**** List of CAPTURE Hardware Devices ****
card 1: AUDIO [USB  AUDIO], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

![](https://maker.pro/storage/GzvRrUW/GzvRrUWRbvvXS6kHV0MGDgiCCZdCFfsyVKcQNIrh.jpeg)

```sh
# 执行录入操作
$ arecord -d 3 -r 16000 -c 1 -t wav -f S16_LE test.wav
-d : 录音时间（s）
-r : 频率
-c : 音轨
-t : 文件类型
-f : 格式

# 尝试播放
$ aplay -f dat test.wav
```

文件录入完毕后，我们使用百度的在线语音识别服务来讲语音转化为文本：

```sh
$ sudo apt-get install libcurl4-gnutls-dev

$ pipenv install pycurl
```

# Motivation & Credits

- [itchat #Project#](https://github.com/littlecodersh/ItChat): itchat 是一个开源的微信个人号接口，使用 python 调用微信从未如此简单。

- [2017-dingdang-robot #Project#](https://github.com/dingdang-robot/dingdang-robot): 叮当是一款可以工作在 Raspberry Pi 上的中文语音对话机器人/智能音箱项目。