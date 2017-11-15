var validate = {
    types : ["phone","email","name","number",'password'],
    regs  : [   /^1[3,5,7,8]\d{9}$/,
                /^[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}$/i,
                /^[\w\u4e00-\u9fa5]{2,10}/g,
                /[1-9]\d*/,
                /^\w{6,16}$/,
                ]
};
validate.install = function(Vue , options){
    function checkValue(type,value,el){
         if(value == ""){
             return true; // 如果没有填写,默认为true
         }
         var index = validate.types.indexOf(type);
         if(index==-1){console.error(type+' is not a provided type,please choose from '+validate.types.join());return;}
         var reg = validate.regs[index];
         if(!reg.test(value)){
             el.style.border='1px solid red';
         }else{
             el.style.border='';
         }
     }

     Vue.directive("validate",{
       bind(el,binding,vnode){
           var index = validate.types.indexOf(binding.arg);
           if(index==-1){console.error(binding.arg+' is not a provided type,please choose from '+validate.types.join());return;}
           if(!binding.arg){
               console.error("please choose a type for ["+binding.expression+"] from "+validate.types.join());
           }
       },
       update(el,binding,vnode){
           if(binding.value !== binding.oldValue){
               if(!binding.arg){
                   console.error("please choose a type for ["+binding.expression+"] from "+validate.types.join());
                   return ;
               }
               checkValue(binding.arg,binding.value,el);
           }
           // Vue.log("旧的值："+binding.oldValue+"，新的值："+binding.value); // 这里使用了自定义的log 函数 所以在main.js 中需要在 use validate之前 就 use log
       },
    })
}
module.exports = validate;
