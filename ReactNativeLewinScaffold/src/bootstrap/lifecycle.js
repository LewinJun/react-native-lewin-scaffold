/**
 * 虽然文件名是声明周期，但是目前关注点都在启动过程，一下几个函数的含义是
 * beforeRunApp 在 redux 数据还原前执行，这时页面还没有加载，数据都是初始化状态 -> appWillMount
 * afterRehydrated 在 redux 数据还原后执行，紧随其后的是页面出现 -> appDidMount
 */

/**
 * 所有页面出现之前执行
 * **不要添加网络请求相关操作，如果超时会导致应用一直等待在启动页**
 */
export const beforeRunApp = async function () {

}

/**
 * redux 数据还原后执行
 */
export const afterRehydrated = async function () {
    
}