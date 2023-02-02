### 后台管理
页面搭建+布局
vue3快速上手:[https://cn.vuejs.org/guide/quick-start.html](https://cn.vuejs.org/guide/quick-start.html)
*	创建vue项目	
	*	![在这里插入图片描述](https://img-blog.csdnimg.cn/aa75ae083cd34fb0a244afa2dc3758c1.png)
		代码:
		```java
		//创建项目
		npm init vue@lates
		//启动项目
		> cd <your-project-name>
		> npm install
		> npm run dev
		```

		![在这里插入图片描述](https://img-blog.csdnimg.cn/80ecf23f3e254d4e892996542d92f133.png)
		配置成功
		![在这里插入图片描述](https://img-blog.csdnimg.cn/ec24119fba73474090cdc251265e2e14.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/596968a76eb4482890281d1c9eaa7105.png)
真正的入口 在index.html
**vite.config.js 可以配置端口号** 不推荐5173 前段用5 后端建议用别的开头 这里用7000

![在这里插入图片描述](https://img-blog.csdnimg.cn/789a8260e10043b8bb4e87869a06d01c.png)
```java
//安装element-plus (在vue项目的端口中装)
npm install element-plus --save
yarn add element-plus
pnpm install element-plus
```

导入配置到main.js中
```java
import App from './App.vue'
import router from './router'

app.use(ElementPlus)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e5b84fa22bed4a51b9e7b61c5826d992.png)配置快捷启动 不用命令符启动了
![在这里插入图片描述](https://img-blog.csdnimg.cn/a0989e119c964736af18ab60a8bda30c.png)
![请添加图片描述](https://img-blog.csdnimg.cn/1a95e9e0eea64f998338c6300727a19b.jpeg)
样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/99c0411012b544e0b54be7770c4714db.png)
路由入口 这里同一风格与下面写法同样
![在这里插入图片描述](https://img-blog.csdnimg.cn/4ff940026eca461e8174fbb469c70154.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/541a4e6ae0ee460693e599f377f4e39c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/4f1f7dc0fb3949b6873c5edaad1e531f.png)主题与边界撑开好看一点
![在这里插入图片描述](https://img-blog.csdnimg.cn/21060aa42b7e4ba794b0d1e8ff2e5f41.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/a4b1bcff67364e6fbaa9f22fdbd8e458.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/37f68dd575f2494690c7a5515f94d0fe.png)![请添加图片描述](https://img-blog.csdnimg.cn/5d078c3a028d4d46ada27c2c8a8b6051.jpeg)
![在这里插入图片描述](https://img-blog.csdnimg.cn/40a00e3c8fb7418c9f6b0749256f3303.png)
