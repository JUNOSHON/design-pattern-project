


## 주제 : 웹툰 서비스

## 💻 프로젝트 소개

- 디자인 패턴 3개 이상을 써서 프로젝트 만들기

## ⚙️ 개발 환경

- `**HTML5 + CSS3 + JavaScript**`

## 📝Git Convention

---

| Tag Name | Description |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Design | CSS등 사용자 UI 디자인 변경 |
| Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업 |
| Remove | 파일을 삭제하는 작업 |
| Test | 테스트 코드, 리팩토링 테스트 코드 추가,실제 사용 코드 변경 없음 |
| Docs | 문서 수정 |
| Style | 코드 포맷 변경 |
| Refactor | 결과의 변경없이 코드의 구조 재조정 |
| Fix | 코드 수정 및 버그 수정 |

## 🎨 사용하는 디자인 패턴

### 옵저버 패턴

---
![image](https://github.com/JUNOSHON/design-pattern-project/assets/67476544/84c96b00-0aef-4383-99fb-1b67a1732068)



- 웹툰은 주제(Subject), 사용자는 옵저버(Observer)임.
- **옵저버가 주제를 구독함 → 사용자가 웹툰을 구독함**
- 주제의 상태가 변하면(무료 충전이 되면) → 자신을 구독하고 있는 사용자들에게 **‘무료충전완료’** 라는 메시지를 띄워줌.

![image](https://github.com/JUNOSHON/design-pattern-project/assets/67476544/2b6eb713-5f3e-4088-84b7-6703f2c108bc)


![image](https://github.com/JUNOSHON/design-pattern-project/assets/67476544/9f6644c6-e63f-44d8-9db5-4812e311b495)


![image](https://github.com/JUNOSHON/design-pattern-project/assets/67476544/e99af355-11d1-423d-99dd-ff5454278f47)


### 상태 패턴

---

- 구독하기 버튼을 누르면 구독하기 버튼의 텍스트가 구독 취소로 바뀜 → 객체의 상태에 따라(버튼이 **‘구독하기’**인지 **‘구독취소**’ 인지 에 따라) 다른 행동을 취함 → 상태패턴…?

### 퍼사드 패턴
