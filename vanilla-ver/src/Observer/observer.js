export class Observer {
  constructor() {
    this.subscribers = [];
  }
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }
  
  notify(data) {
    this.subscribers.forEach(subscriber => subscriber.update(data));
  }
}
export class Subscriber {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(`${this.name} received an update: ${data}`);
    // 사용자에게 업데이트 정보를 보여주는 동작을 수행할 수 있습니다.
    document.querySelector('.update-message').textContent = data;
  }
}
