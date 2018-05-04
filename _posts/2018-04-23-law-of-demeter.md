---
layout: page
title: 面向对象设计原则之迪米特法则
categories: [设计模式]
tags: [软件工程,Java]
---

> 免责声明：本文内容大都来源于网络

## 迪米特法则定义
狭义的迪米特法则定义：也叫最少知识原则(LKP，Least Knowledge Principle)。如果两个类不必彼此直接通信，那么这两个类就不应当发生直接的相互作用。如果其中的一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用。

广义的迪米特法则定义：一个模块设计得好坏的一个重要的标志就是该模块在多大的程度上将自己的内部数据与实现有关的细节隐藏起来。信息的隐藏非常重要的原因在于，它可以使各个子系统之间脱耦，从而允许它们独立地被开发、优化、使用阅读以及修改。


简言之，就是通过引入一个合理的第三者来降低现有对象之间的耦合度。

## 优点
迪米特法则使对象之间的耦合降到最小，符合高内聚低耦合的特性，从而使得类具有很好的可读性和可维护性。

## 符合迪米特法则原则的设计模式
迪米特是面向对象设计的原则，而外观模式和中介者模式是这个原则的具体实现。就像ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）通过ECMA-262标准化的脚本程序设计语言,而JavaScript是该标准的具体实现。

### 外观模式（Facade）
外观模式，我们通过外观的包装，使应用程序只能看到外观对象，而不会看到具体的细节对象，这样无疑会降低应用程序的复杂度，并且提高了程序的可维护性。

![Facade](/images/2018/0423_01.jpg)

#### 外观模式优点
在于对客户屏蔽子系统组件，减少了客户处理的对象数目并使得子系统使用起来更加容易，它实现了子系统与客户之间的松耦合关系，并降低了大型软件系统中的编译依赖性，简化了系统在不同平台之间的移植过程。

#### 外观模式缺点
在于不能很好地限制客户使用子系统类，而且在不引入抽象外观类的情况下，增加新的子系统可能需要修改外观类或客户端的源代码，违背了“开闭原则”。

开放闭合原则的定义为：软件实体（类、模块、函数等）应该是可以扩展的，但是不可以修改。

简言之，两个特征：

* 对于扩展是开放的；
* 对于修改是关闭的

#### 外观模式适用情况
要为一个复杂子系统提供一个简单接口；客户程序与多个子系统之间存在很大的依赖性；在层次化结构中，需要定义系统中每一层的入口，使得层与层之间不直接产生联系。

#### 符合外观模式的案例
服务器统一接口层。


### 中介者模式（Mediator）
中介者模式（Mediator Pattern）是用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。

![Mediator](/images/2018/0423_02.jpg)

#### 中介者模式的优点
在于简化了对象之间的交互，将各同事类解耦，还可以减少子类生成，对于复杂的对象之间的交互，通过引入中介者，可以简化各同事类的设计和实现；

#### 中介者模式缺点
在于具体中介者类中包含了同事之间的交互细节，可能会导致具体中介者类非常复杂，使得系统难以维护。

#### 中介者模式适用情况
系统中对象之间存在复杂的引用关系，产生的相互依赖关系结构混乱且难以理解；一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象；想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。

#### 符合中介者模式的案例
前端开发：Vue + vuex。


## 参考资料

[面向对象设计原则之迪米特法则](https://gof.quanke.name/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99%E4%B9%8B%E8%BF%AA%E7%B1%B3%E7%89%B9%E6%B3%95%E5%88%99.html)

[深入浅出外观模式](https://gof.quanke.name/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F%EF%BC%88%E4%B8%80%EF%BC%89.html)

[深入浅出中介者模式](https://gof.quanke.name/%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F-Mediator%20Pattern.html)

[外观模式](http://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/facade.html)

[中介者模式](http://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/mediator.html)