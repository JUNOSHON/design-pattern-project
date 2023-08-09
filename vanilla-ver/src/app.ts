

interface Observer {
    update(isFreeCharge: boolean): void;
}



class User implements Observer { //User는 Observer 인터페이스를 구현함으로써 옵저버가 됨
    username: string;
    isSubscribed: boolean = false;

    constructor(username: string) {
        this.username = username;
    }

    update(isFreeCharge: boolean): void {
        if (this.isSubscribed) {
            const message = isFreeCharge ? "무료충전완료!" : "";
            console.log(`${this.username}님, ${message}`);
        }
    }

    toggleSubscribe(): void {
        this.isSubscribed = !this.isSubscribed;
    }

    getSubscribeState(): boolean {
        return this.isSubscribed;
    }
}


class Webtoon { //웹툰 클래스, 주제에 해당
    title: string;
    subscribers: Observer[] = [];
    isFreeCharge: boolean = false;

    constructor(title: string) {
        this.title = title;
    }

    registerObserver(observer: Observer): void { //옵저버 추가

        this.subscribers.push(observer);

    }

    removeObserver(observer: Observer): void { //옵저버에서 삭제
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    setisFreeCharge(isFreeCharge: boolean): void { //notify
        this.isFreeCharge = isFreeCharge;
        for (const subscriber of this.subscribers) {
            subscriber.update(isFreeCharge);
        }
    }
}

// 사용자 및 웹툰 인스턴스 생성
const yun = new User("윤진원");
const randomChattingWebtoon = new Webtoon("랜덤채팅의 그녀");
const nohiWebtoon = new Webtoon("미필은 노하이");

// "구독하기" 버튼 클릭 이벤트 처리
const subscribeButtons = document.querySelectorAll(".subscribe-button");
subscribeButtons.forEach(button => {
    const webtoon = button.closest(".webtoon-card")?.querySelector(".webtoon-title")?.textContent;
    if (webtoon) {
        const user = yun; // 웹툰을 구독하는 사용자

        button.addEventListener("click", () => {
            user.toggleSubscribe();
            if (user.getSubscribeState()) {
                randomChattingWebtoon.registerObserver(user);
                nohiWebtoon.registerObserver(user);
                button.textContent = "구독 취소";
                console.log(`랜덤채팅의 그녀 구독 완료!`)
            } else {
                randomChattingWebtoon.removeObserver(user);
                nohiWebtoon.removeObserver(user);
                button.textContent = "구독하기";
                console.log(`랜덤채팅의 그녀 구독 취소 완료1!`)
            }
        });
    }
});

const chargeButtons = document.querySelectorAll(".charge-button");
chargeButtons.forEach(button => {
    const webtoonCard = button.closest(".webtoon-card");
    if (webtoonCard) {
        const webtoonTitle = webtoonCard.querySelector(".webtoon-title")?.textContent;
        const webtoonAuthor = webtoonCard.querySelector(".webtoon-author");

        button.addEventListener("click", () => {
            if (yun.getSubscribeState()) {
                const webtoon = webtoonTitle === "랜덤채팅의 그녀" ? randomChattingWebtoon : nohiWebtoon;
                webtoon.setisFreeCharge(true);

                webtoonAuthor.textContent = "무료충전완료!";
                webtoonAuthor.classList.add("free-charge-text");
            }
        });
    }
});

