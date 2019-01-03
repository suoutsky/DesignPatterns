
Function.prototype.bind = function(context){
   let self = this; // 保存原函数 onclick
   return function() {
     return self.apply(context, arguments);
   }
}

// onclick={onclick.bind(this)}





