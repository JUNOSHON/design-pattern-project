


## 주제 : 웹툰 서비스

## 💻 프로젝트 소개

- 디자인 패턴 3개 이상을 써서 프로젝트 만들기

## ⚙️ 개발 환경

- <b>ES6</b>

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
- 주제가 웹툰, 독자가 웹툰을 구독하면 웹툰이 무료 충전이 되었을 때 사용자에게 알림을 보냄
-  **옵저버가 주제를 구독함 → 사용자가 웹툰을 구독함**


### 팩토리 패턴

---

- User 객체를 생성하는 UserFactory 사용.
- createUser 를 사용해 유저 객체를 생성하고 반환함.

### 전략 패턴
---
- 관리자 모드 로그인을 전략 패턴을 사용해 구현
- LoginStrategy 인터페이스를 각 서브클래스에서 구현함으로써 관리자와 일반 사용자 로그인 구현

   <img width="360" alt="image" src="https://github.com/JUNOSHON/design-pattern-project/assets/67476544/24edb8a9-5dd9-4a77-8160-acb1e6c22689">

