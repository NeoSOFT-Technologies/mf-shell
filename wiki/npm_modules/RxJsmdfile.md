# RxJS: Reactive Extensions For JavaScript

RxJS stands for `Reactive Extensions Library for JavaScript`. RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections. It's used in Micro Front end services & it's a state management

## `Installation and Usage`

### `All Module Types (CJS/ES6/AMD/TypeScript) via npm`
To install this library via `npm version 3`, use the following command:
> npm install @reactivex/rxjs

If you are using `npm version 2`, you need to specify the library version explicitly:
> npm install @reactivex/rxjs@7.3.0

### `For CDN, you can use [unpkg](https://unpkg.com/):`
> [https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js](https://unpkg.com/rxjs@%5E7/dist/bundles/rxjs.umd.min.js)

## `The essential concepts in RxJS which solve async event management are:`
- `Observable`: represents the idea of an invokable collection of future values or events.
 
- `Observer`: is a collection of callbacks that knows how to listen to values delivered by the Observable.

- `Subscription`: represents the execution of an Observable, is primarily useful for cancelling the execution.

- `Operators`: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.

- `Subject`: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.

- `Schedulers`: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.


## `Some Importants Functions/Methods`

 ### `RxJS Observables`
>*In RxJS, an observable is a function that is used to create an observer and attach it to the source where values are expected from. For example, clicks, mouse events from a DOM element or an Http request, etc. are the example of observable.*

>Observables can also be defined as *lazy Push collections of multiple values. Let's see a simple example to understand how observables are used to push the values.*

>See the following example:
```javascript
import { Observable } from 'rxjs';  
const observable = new Observable(subscriber => {  
  subscriber.next(10);  
  subscriber.next(20);  
  subscriber.next(30);  
  setTimeout(() => {  
    subscriber.next(40);  
    subscriber.complete();  
  }, 1000);  
});  
```

>In the above example, there is an observable that pushes the values 10, 20, 30 immediately and synchronously when subscribed, but the value 40 will be pushed after one second since the subscribe method has called.

>If you want to invoke the observable and see the above values, you have to subscribe to it. See the following example:

```javascript
import { Observable } from 'rxjs';  
const observable = new Observable(subscriber => {  
  subscriber.next(10);  
  subscriber.next(20);  
  subscriber.next(30);  
  setTimeout(() => {  
    subscriber.next(40);  
    subscriber.complete();  
  }, 1000);  
});  

console.log('These are the values just before subscribe');  
observable.subscribe({  
  next(x) { console.log('We have got value ' + x); },  
  error(err) { console.error('something wrong occurred: ' + err); },  
  complete() { console.log('Done successfully'); }  
});  
console.log('This value is just after subscribe');  
```
>Output:

>When we execute the above program, we shall the following result on the console:
![image](https://user-images.githubusercontent.com/98937506/169797974-06a0591e-3e78-4c0f-881e-279d6a699659.png)


#### `Observables are generalizations of functions`

>We know that observables are functions that act as clicks, mouse events from a DOM element or an Http request, etc. but observables are not like EventEmitters, nor are they like Promises for multiple values. In some cases, observables may act like EventEmitters, namely when they are multicasted using RxJS Subjects, but usually, they don't act like EventEmitters.

>Observables are like functions with zero arguments, but generalize those to allow multiple values.

>Let's see an example to understand this clearly.
a simple example of a function:
```javascript
function foo() {  
  console.log('Hello World!');  
  return 123;  
}  
const x = foo.call(); // same as foo()  
console.log(x);  
const y = foo.call(); // same as foo()  
console.log(y);  
```
>Output:
You will see the following output:
```
"Hello World!"
123
"Hello World!"
123
```
>Let's write the same example, but with Observables:

```javascript
import { Observable } from 'rxjs';  
const foo = new Observable(subscriber => {  
  console.log('Hello World!');  
  subscriber.next(123);  
});  
foo.subscribe(x => {  
  console.log(x);  
});  
foo.subscribe(y => {  
  console.log(y);  
});  
```
#### Output:
You will see the same output as above:

![image](https://user-images.githubusercontent.com/98937506/169798515-b4fc5c9b-bb86-42d4-bc7e-ad9fd1fa556d.png)

>You can see this because both `functions` and `Observables` are lazy computations. If you don't call the function, the `console.log('Hello World!')` won't happen. Also, with `Observables`, if you don't "call" it with subscribe, the `console.log('Hello World!')` won't happen.

### `Subscription`

>The RxJS Subscribe operator is used as an adhesive agent or glue that connects an observer to an Observable. An observer must be first subscribed to see the items being emitted by an Observable or to receive an error or completed notifications from the Observable.
RxJS subscription also has an important method called `unsubscribe()`. The `unsubscribe()` method is used to remove all the resources used for that observable i.e.; the observable will get canceled.


Syntax:
```javascript
variable_name.unsubscribe();  
```

Let's see another example using the `unsubscribe()` method.Here, we are using the example with `unsubscribe()` method.

```javascript
import { of } from 'rxjs';  
import { count } from 'rxjs/operators';  
let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
let final_val = all_nums.pipe(count());  
let test = final_val.subscribe(x => console.log("The total count is "+x));  
test.unsubscribe();  
```
>Output:

```
The total count is 11
```
![image](https://user-images.githubusercontent.com/98937506/169799878-154fa098-78e0-4b91-8754-6a40c2573eeb.png)

Here, the `subscription` is stored in the variable named 'test' so we have used the `test.unsubscribe()` apply `unsubscribe()` method.

### `Nested Subscription`

We can put together multiple subscriptions in a way that if we call to an `unsubscribe()` of one Subscription, it may unsubscribe multiple Subscriptions. We can do this by "adding" one subscription into another. See the following example:

```javascript
import { interval } from 'rxjs';  
const observable1 = interval(400);  
const observable2 = interval(300);  
const subscription = observable1.subscribe(x => console.log('This is first: ' + x));  
const childSubscription = observable2.subscribe(x => console.log('This is second: ' + x))subscription.add(childSubscription);  
setTimeout(() => {  
  // this will unsubscribe BOTH subscription and childSubscription  
  subscription.unsubscribe();  
}, 1000);  
```
>Output:
```
This is second: 0
This is first: 0
This is second: 1
This is first: 1
This is second: 2 
```
![image](https://user-images.githubusercontent.com/98937506/169800193-a543a80f-aeec-49da-9e46-85a1b2ad86bf.png)

### `RxJS Subjects`
An RxJS Subject is like an `Observable`. It is a special type of `Observable` that allows values to be multicasted to many Observers. In simple words, we can say that an RxJS subject is an `Observable` can multicast or talk to many observers.
next() is also one of the major methods of  RxJS subjects

### `How to subscribe to the RxJS Subject?`
After creating the RxJS subject, we have to subscribe to it. A `Subscription` is an object that is used to represent a disposable resource, usually the execution of the Subject. We can easily create multiple `subscriptions` on the Subject by using the following method:

```javascript
subject_test.subscribe({  
   next: (v) => console.log(`From Subject : ${v}`)  
});  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject: ${v}`)  
});   
```
### `How to pass data to Subject?`

After `subscription`, we need to pass data to the subject we have created. We can do this by using the next() method.

```javascript
subject_test.next("A");  
```

This data will be passed to all the subscription added on the subject.

Example using next(v) method:

```javascript

import { Subject } from 'rxjs';  
const subject_test = new Subject();  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject : ${v}`)  
});  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject: ${v}`)  
});  
subject_test.next("Hello");  
subject_test.next("Good Morning");  
```
> Here, we have created an object named "subject_test" by calling a new Subject(). After that, the subject_test object has reference to next() method.

>Output:
![image](https://user-images.githubusercontent.com/98937506/169801312-295b569b-ec3f-4c29-bdf9-318a376bb90e.png)

## `BehaviorSubject`
>The BehaviorSubject is used to denote "the current and latest value when called". It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.

>BehaviorSubjects are mainly used to represent "values over time". For example, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
>This method is use to get the current value
I

Syntax:
```javascript
import { BehaviorSubject } from 'rxjs';  
const subject = new BehaviorSubject("given_value");   
// initialized the behaviour subject with value: given_value 
```
Example
```javascript
import { BehaviorSubject } from 'rxjs';  
const subject = new BehaviorSubject(0); // 0 is the initial value  
subject.subscribe({  
  next: (v) => console.log(`observerA: ${v}`)  
});  
subject.next(1);  
subject.next(2);  
subject.subscribe({  
  next: (v) => console.log(`observerB: ${v}`)  
});  
subject.next(3);  
```
>Output
![image](https://user-images.githubusercontent.com/98937506/169803613-fd2b3a37-2707-4b5c-87e9-b548397aa8ad.png)



## `Goals`

- Smaller overall bundles sizes
- Provide better performance than preceding versions of RxJS
- To model/follow the [Observable Spec Proposal](https://github.com/zenparsing/es-observable) to the observable
- Provide more modular file structure in a variety of formats
- Provide more debuggable call stacks than preceding versions of RxJS

## `Building/Testing`

- `npm run compile` build everything
- `npm test` run tests
- `npm run dtslint` run dtslint tests
