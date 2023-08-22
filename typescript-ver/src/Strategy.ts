import {mainMenu, showWebtoonList, userFactory} from "./mainmenu";
import readline from "readline";
import {Webtoon} from "./Observer";
import {users} from "./mainmenu";
import {webtoons} from "./mainmenu";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function login() {
    rl.question('아이디: ', username => {
        rl.question('패스워드: ', password => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                console.log(`${username}님, 환영합니다!\n`);
                if (user.username === 'admin') {
                    adminMenu();
                } else {
                    showWebtoonList(user);
                }
            } else {
                console.log('로그인 실패');
                mainMenu();
            }
        });
    });
}

function adminMenu() {
    console.log('===== 관리자 모드 =====');
    console.log('1. 웹툰 추가');
    console.log('2. 돌아가기');

    rl.question('선택: ', choice => {
        switch (choice) {
            case '1':
                addWebtoon();
                break;
            case '2':
                console.log('메인 메뉴로 돌아갑니다.\n');
                mainMenu();
                break;
            default:
                console.log('잘못된 선택입니다.');
                adminMenu();
        }
    });
}

function addWebtoon() {
    rl.question('추가할 웹툰의 제목: ', title => {
        const newWebtoon = new Webtoon(title);
        webtoons.push(newWebtoon);
        console.log(`웹툰 '${title}'이(가) 추가되었습니다.`);
        adminMenu();
    });
}

export function signUp() {
    rl.question('아이디: ', username => {
        rl.question('패스워드: ', password => {
            const newUser = userFactory.createUser(username, password);
            users.push(newUser);
            console.log(`${username}님, 회원가입이 완료되었습니다.\n`);
            mainMenu();
        });
    });
}
