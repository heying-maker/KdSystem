import Reflux from "reflux"
//引入需要监听的actions
import actions from "./actions"


let store = Reflux.createStore({
  //将actions加入监听队列
  listenables: [actions],
  //这是全局变量，随便定义


  init: function () {

  },
  //这是actions中的"getAllItems","addItem","deleteItem"动作（函数）对应的监听回调函数
  //调用"getAllItems","addItem","deleteItem"时实际上调用的是下面对应的回调函数，这些回调函数类似于动作接收者和动作执行者
  //这里的命名有严格的规定，on表示监听，changeData要对应onChangeData命名

  allData: {
    
  },
  onGetData:function(name) {
      let t = this;
      t.allData = {};
      t.allData.name = name;
      t.updateComponent();
  },
  onSetData:function (name) {
      let t = this;
      t.allData = {};
      t.allData.name = name;
      t.updateComponent();
  },
 
  updateComponent: function() {
      this.trigger(this.allData);
     
  },

  getInitialState: function() {
      return this.allData;
  }


});
export default store;