### 后台管理

页面搭建+布局
vue3快速上手:[https://cn.vuejs.org/guide/quick-start.html](https://cn.vuejs.org/guide/quick-start.html)

* 创建vue项目    
  
  * ![在这里插入图片描述](https://img-blog.csdnimg.cn/aa75ae083cd34fb0a244afa2dc3758c1.png)
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
![在这里插入图片描述](https://img-blog.csdnimg.cn/a0989e119c964736af18ab60a8bda30c.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/789a8260e10043b8bb4e87869a06d01c.png)
