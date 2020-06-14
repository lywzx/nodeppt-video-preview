# 这是一个简单的nodeppt的插件

写这个插件的目的在于，nodeppt做完分享后，希望在能添加一个当时分享的一个录屏。

## 使用方法

```js
// 指向一个视频的链接地址
window.__remote_video_url = '';
```

然后在markdown文件头部引入编译后的js即可，现在放在cdn上面，可以下载下来使用。

```html
<link href="https://cdn.lyblog.net/nodeppt/plugin/js/v0.0.1/index.js" rel="stylesheet" />
```

## 示例

请看我一个分享:

* [Typescript中的装饰器(二)](https://www.lyblog.net/ppt/2%E3%80%81Typescript%E4%B8%AD%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8(%E4%BA%8C)/slide.html)
