var User = /** @class */ (function () {
    function User(username) {
        this.isSubscribed = false;
        this.username = username;
    }
    User.prototype.update = function (isFreeCharge) {
        if (this.isSubscribed) {
            var message = isFreeCharge ? "무료충전완료!" : "";
            console.log("".concat(this.username, "\uB2D8, ").concat(message));
        }
    };
    User.prototype.toggleSubscribe = function () {
        this.isSubscribed = !this.isSubscribed;
    };
    User.prototype.getSubscriptionStatus = function () {
        return this.isSubscribed;
    };
    return User;
}());
var Webtoon = /** @class */ (function () {
    function Webtoon(title) {
        this.subscribers = [];
        this.isFreeCharge = false;
        this.title = title;
    }
    Webtoon.prototype.registerObserver = function (observer) {
        this.subscribers.push(observer);
    };
    Webtoon.prototype.removeObserver = function (observer) {
        var index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    };
    Webtoon.prototype.setisFreeCharge = function (isFreeCharge) {
        this.isFreeCharge = isFreeCharge;
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(isFreeCharge);
        }
    };
    return Webtoon;
}());
// 사용자 및 웹툰 인스턴스 생성
var yun = new User("윤진원");
var randomChattingWebtoon = new Webtoon("랜덤채팅의 그녀");
var nohiWebtoon = new Webtoon("미필은 노하이");
// "구독하기" 버튼 클릭 이벤트 처리
var subscribeButtons = document.querySelectorAll(".subscribe-button");
subscribeButtons.forEach(function (button) {
    var _a, _b;
    var webtoon = (_b = (_a = button.closest(".webtoon-card")) === null || _a === void 0 ? void 0 : _a.querySelector(".webtoon-title")) === null || _b === void 0 ? void 0 : _b.textContent;
    if (webtoon) {
        var user_1 = yun; // 웹툰을 구독하는 사용자
        button.addEventListener("click", function () {
            user_1.toggleSubscribe();
            if (user_1.getSubscriptionStatus()) {
                randomChattingWebtoon.registerObserver(user_1);
                nohiWebtoon.registerObserver(user_1);
                button.textContent = "구독 취소";
                console.log("\uB79C\uB364\uCC44\uD305\uC758 \uADF8\uB140 \uAD6C\uB3C5 \uC644\uB8CC!");
            }
            else {
                randomChattingWebtoon.removeObserver(user_1);
                nohiWebtoon.removeObserver(user_1);
                button.textContent = "구독하기";
                console.log("\uB79C\uB364\uCC44\uD305\uC758 \uADF8\uB140 \uAD6C\uB3C5 \uCDE8\uC18C \uC644\uB8CC1!");
            }
        });
    }
});
var chargeButtons = document.querySelectorAll(".charge-button");
chargeButtons.forEach(function (button) {
    var _a;
    var webtoonCard = button.closest(".webtoon-card");
    if (webtoonCard) {
        var webtoonTitle_1 = (_a = webtoonCard.querySelector(".webtoon-title")) === null || _a === void 0 ? void 0 : _a.textContent;
        var webtoonAuthor_1 = webtoonCard.querySelector(".webtoon-author");
        button.addEventListener("click", function () {
            if (yun.getSubscriptionStatus()) {
                var webtoon = webtoonTitle_1 === "랜덤채팅의 그녀" ? randomChattingWebtoon : nohiWebtoon;
                webtoon.setisFreeCharge(true);
                webtoonAuthor_1.textContent = "무료충전완료!";
                webtoonAuthor_1.classList.add("free-charge-text");
            }
        });
    }
});
