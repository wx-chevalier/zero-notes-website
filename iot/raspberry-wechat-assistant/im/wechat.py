# encoding: utf-8

import itchat

auto_reply_msg = '您好，我正在开车，稍候回复您'


class Wechat:
    def __init__(self, tts):
        '''

        :param tts: TTS 对象实例，用于播放语音
        '''
        itchat.auto_login()
        itchat.run()

@itchat.msg_register(itchat.content.TEXT)
def text_reply(msg):
    return auto_reply_msg

if __name__ == '__main__':
    Wechat()