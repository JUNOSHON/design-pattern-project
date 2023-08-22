import * as readline from 'readline';
import {Subscriber, Webtoon} from "./Observer";
import {User, UserFactory} from "./UserFactory";
import {login,signUp} from "./Strategy"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



export const users: User[] = [];
export const userFactory = new UserFactory();
export const webtoons: Webtoon[] = [
    new Webtoon('신의 탑'),
    new Webtoon('외모지상주의'),
    new Webtoon('뷰티풀군바리')
];



export function showWebtoonList(user: User) {
    console.log(`${user.username}님의 구독 가능한 웹툰 목록:`);
    webtoons.forEach((webtoon, index) => {
        console.log(`${index + 1}. ${webtoon.title}`);
    });

    rl.question('구독할 웹툰 번호를 선택하세요 (또는 0을 입력하여 종료): ', choice => {
        const webtoonIndex = parseInt(choice) - 1;
        if (webtoonIndex >= 0 && webtoonIndex < webtoons.length) {
            const selectedWebtoon = webtoons[webtoonIndex];
            user.subscribedWebtoons.push(selectedWebtoon);
            selectedWebtoon.subscribe(new Subscriber(user.username));
            console.log(`${selectedWebtoon.title}을(를) 구독하셨습니다.`);

            // 무료 충전 완료 후 3초 뒤에 알림 보내기
            setTimeout(() => {
                selectedWebtoon.completeFreeCharge();
            }, 3000);
        } else if (webtoonIndex === -1) {
            console.log('프로그램을 종료합니다.');
            rl.close();
        } else {
            console.log('잘못된 선택입니다.');
            showWebtoonList(user);
        }
    });
}

export function mainMenu() {
    console.log('1. 로그인');
    console.log('2. 회원가입');
    console.log('3. 종료');

    rl.question('선택: ', choice => {
        switch (choice) {
            case '1':
                login();
                break;
            case '2':
                signUp();
                break;
            case '3':
                console.log('프로그램을 종료합니다.');
                rl.close();
                break;
            default:
                console.log('잘못된 선택입니다.');
                mainMenu();
        }
    });
}





