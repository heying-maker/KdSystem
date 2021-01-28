import Reflux from "reflux"
//这里创建一个动作（函数）集，类似于消息发布者（通俗点叫动作发布者），下面制定了三个动作（函数）
//在store中会对这三个动作进行监听
var actions = Reflux.createActions(["getData","setData",]);
export default actions;