基于react native 0.61.5

## 脚手架说明

1. redux+persist 状态管理和redux持久化

```json
    "react-redux": "7.1.3",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-persist-transform-filter": "^0.0.20",
    "redux-saga": "^1.1.3",
```

2. react-navigation 页面路由
```json
    "react-navigation": "^4.0.10",
    "react-navigation-stack": "^2.0.15",
    "react-navigation-tabs": "^2.7.0",
```

3. dva-core 1.4.0 版本

## 项目架构目录

> 目录结构

├── src // 代码资源目录 │ ├── components


├── build // webpack配置文件 ├── config // 项目打包路径 ├── elm // 上线项目文件，放在服务器即可正常访问 ├── screenshots // 项目截图 ├── src // 源码目录 │ ├── components // 组件 │ │ ├── common // 公共组件 │ │ │ ├── alertTip.vue // 弹出框组件 │ │ │ ├── buyCart.vue // 购物车组件 │ │ │ ├── computeTime.vue // 倒计时组件 │ │ │ ├── loading.vue // 页面初始化加载数据的动画组件 │ │ │ ├── mixin.js // 组件混合(包括：指令-下拉加载更多，处理图片地址) │ │ │ ├── ratingStar.vue // 评论的五颗星组件 │ │ │ └── shoplist.vue // msite和shop页面的餐馆列表公共组件 │ │ ├── footer │ │ │ └── footGuide.vue // 底部公共组件 │ │ └── header │ │ └── head.vue // 头部公共组件 │ ├── config // 基本配置 │ │ ├── env.js // 环境切换配置 │ │ ├── fetch.js // 获取数据 │ │ ├── mUtils.js // 常用的js方法 │ │ └── rem.js // px转换rem │ ├── images // 公共图片 │ ├── page │ │ ├── balance │ │ │ ├── balance.vue // 余额页 │ │ │ └── children │ │ │ └── detail.vue // 余额说明 │ │ ├── benefit │ │ │ ├── benefit.vue // 红包页 │ │ │ └── children │ │ │ ├── commend.vue // 推荐有奖 │ │ │ ├── coupon.vue // 代金券说明 │ │ │ ├── exchange.vue // 兑换红包 │ │ │ ├── hbDescription.vue // 红包说明 │ │ │ └── hbHistory.vue // 历史红包 │ │ ├── city
│ │ │ └── city.vue // 当前城市页 │ │ ├── confirmOrder │ │ │ ├── children │ │ │ │ ├── children │ │ │ │ │ ├── addAddress.vue // 添加地址页 │ │ │ │ │ └── children │ │ │ │ │ └── searchAddress.vue // 搜索地址页 │ │ │ │ ├── chooseAddress.vue // 选择地址页 │ │ │ │ ├── invoice.vue // 选择发票页 │ │ │ │ ├── payment.vue // 付款页 │ │ │ │ ├── remark.vue // 订单备注页 │ │ │ │ └── userValidation.vue // 用户验证页 │ │ │ └── confirmOrder.vue // 确认订单页 │ │ ├── download │ │ │ └── download.vue // 下载App │ │ ├── find │ │ │ └── find.vue // 发现页 │ │ ├── food │ │ │ └── food.vue // 食品筛选排序页 │ │ ├── forget │ │ │ └── forget.vue // 忘记密码，修改密码页 │ │ ├── home │ │ │ └── home.vue // 首页 │ │ ├── login │ │ │ └── login.vue // 登录注册页 │ │ ├── msite │ │ │ └── msite.vue // 商铺列表页 │ │ ├── order │ │ │ ├── children │ │ │ │ └── orderDetail.vue // 订单详情页 │ │ │ └── order.vue // 订单列表页 │ │ ├── points │ │ │ ├── children │ │ │ │ └── detail.vue // 积分说明 │ │ │ └── points.vue // 积分页 │ │ ├── profile │ │ │ ├── children │ │ │ │ ├── children │ │ │ │ │ ├── address.vue // 地址 │ │ │ │ │ └── children │ │ │ │ │ ├── add.vue // 新增地址 │ │ │ │ │ └── children │ │ │ │ │ └── addDetail.vue // 搜索地址 │ │ │ │ ├── info.vue // 帐户信息 │ │ │ │ └── setusername.vue // 重置用户名 │ │ │ └── profile.vue // 个人中心 │ │ ├── search │ │ │ └── search.vue // 搜索页 │ │ ├── service │ │ │ ├── children │ │ │ │ └── questionDetail.vue // 问题详情 │ │ │ └── service.vue // 服务中心 │ │ ├── shop │ │ │ ├── children │ │ │ │ ├── children │ │ │ │ │ └── shopSafe.vue // 商铺认证信息页 │ │ │ │ ├── foodDetail.vue // 商铺信息页 │ │ │ │ └── shopDetail.vue // 单个商铺信息页 │ │ │ └── shop.vue // 商铺筛选页 │ │ └── vipcard │ │ ├── children │ │ │ ├── invoiceRecord.vue // 购买记录 │ │ │ ├── useCart.vue // 使用卡号购买 │ │ │ └── vipDescription.vue // 会员说明 │ │ └── vipcard.vue // 会员卡办理页 │ ├── plugins // 引用的插件 │ ├── router │ │ └── router.js // 路由配置 │ ├── service // 数据交互统一调配 │ │ ├── getData.js // 获取数据的统一调配文件，对接口进行统一管理 │ │ └── tempdata // 开发阶段的临时数据 │ ├── store // vuex的状态管理 │ │ ├── action.js // 配置actions │ │ ├── getters.js // 配置getters │ │ ├── index.js // 引用vuex，创建store │ │ ├── modules // store模块 │ │ ├── mutation-types.js // 定义常量muations名 │ │ └── mutations.js // 配置mutations │ └── style │ ├── common.scss // 公共样式文件 │ ├── mixin.scss // 样式配置文件 │ └── swiper.min.css │ ├── App.vue // 页面入口文件 │ ├── main.js // 程序入口文件，加载各种公共组件 ├── favicon.ico // 图标 ├── index.html // 入口html文件


## 问题解决

### Error: Unable to resolve module `@react-native-community/masked-view` from `node_modules/react-navigation-stack/lib/module/vendor/views/MaskedView.js`

npm i @react-native-community/masked-view
cd ios & pod install 
