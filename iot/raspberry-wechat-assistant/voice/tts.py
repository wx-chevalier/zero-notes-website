# encoding: utf-8

import os

class TTS:
    def __init__(self):
        print('init')

    def text2voice(self, text, delete=False):
        url = 'http://voice.baidu.com/text2audio?idx=1&tex={0}&cuid=baidu_speech_' \
              'demo&cod=2&lan=zh&ctp=1&pdt=1&spd=4&per=4&vol=5&pit=5'.format(text)
        # 直接播放语音
        os.system('mplayer "%s"' % url)

        if delete:
            os.system('rm -rf "%s"' % url)
