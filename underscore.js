function show (data,IsShowed) {
   if(IsShowed){
      console.log(data);
      }
};

var obj = {name:'vitya',age:22};

var keys = _.keys({name:'vitya',age:22});
show(keys,false); //["name", "age"]




var values = _.values({name:'vitya',age:22});
show(values,false);//["vitya", 22]


var map = _.map({name:'vitya',age:22},function(val,key){
    return val += 'mapped'
});
show(map,false);//["vityamapped", "22mapped"]


var pairs = _.pairs({name:'vitya',age:22});
show(pairs,false);//0:["name", "vitya"]
                 //1: ["age", 22]


var invert = _.invert(obj);
show(invert,false);//{22: "age", vitya: "name"}


function Person(name){
    this.name = name;
}

var create = _.create(Person.prototype,{name:'Ivan',age:20});
show(create,false);//Person {name: "Ivan", age: 20}


show(_.functions(_),false);

var extend = _.extend({name:'vasya'},{age:35})
show(extend,false);//{name: "vasya", age: 35}

var pick = _.pick(obj,'name');
show(pick,false);//{name: "vitya"}


var omit = _.omit(obj,'name');
show(omit,false);//{age: 22} без

var defaults = _.defaults({isPerson:true},obj);
show(defaults,false);//{isPerson: true, name: "vitya", age: 22}

var hasKey = _.has(obj,'name');
show(hasKey,false);//true


var isEqual = _.isEqual(obj,{});
show(isEqual,false);//false


var isMatch = _.isMatch(obj,{name:'vitya'});
show(isMatch,false);//true


var isEmpty = _.isEmpty({sd:2});
show(isEmpty,false);//false


var isElem = _.isElement(document.getElementById('one'));
show(isElem,false);


var isArray = _.isArray([{}]);
show(isArray,false);


var isObj = _.isObject([]);
show(isObj,false);//почті всьо є обєктом!!!


var isFunc = _.isFunction({});
show(isFunc,false);


var isFinite = _.isFinite(20);
show(isFinite,false);


var bool = _.isBoolean(2>3);
show(bool,false);

var isDate = _.isDate(new Date());
show(isDate,false);


var isNaN = _.isNaN(NaN);
show(isNaN,false);


var isNull = _.isNull(5);

var isUndefined = _.isUndefined();









