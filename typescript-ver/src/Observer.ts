export interface Observer {
    update(message: string): void;
}
export class Subscriber implements Observer {
    constructor(private username: string) {}

    update(message: string) {
        console.log(`${this.username}님, ${message}`);
    }
}

// 주제 -> 웹툰
export class Webtoon {
    private subscribers: Subscriber[] = [];
    private freeChargeComplete: boolean = false;

    constructor(public title: string) {}

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    completeFreeCharge() {
        this.freeChargeComplete = true;
        this.notifySubscribers('웹툰의 무료 충전이 완료되었습니다!');
    }

    private notifySubscribers(message: string) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(message);
        });
    }
}
