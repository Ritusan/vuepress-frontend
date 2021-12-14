---
sidebarDepth: 4
---

# chapter1

## 前端性能优化

### 加载时性能优化

- 减少HTTP请求

- 使用HTTP2

- 使用服务端渲染

- 静态资源使用CDN

- 将 CSS 放在文件头部，JavaScript 文件放在底部
- 使用字体图标 iconfont 代替图片图标
- 善用缓存，不重复加载相同的资源
- 压缩文件
- 图片优化
- 通过 webpack 按需加载代码，提取第三库代码，减少 ES6 转为 ES5 的冗余代码
- 

#### 

### 运行时性能优化

- 减少重绘重排
  - 在 CSS 中，transforms 和 opacity 这两个属性更改不会触发重排与重绘
  - 使用 transform 和 opacity 属性更改来实现动画
- 使用 flexbox 而不是较早的布局模型

<script>
    // console.log(new Date() - performance.timing.navigationStart)
</script>
