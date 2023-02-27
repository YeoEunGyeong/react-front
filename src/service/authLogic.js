import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import firebase from 'firebase';

class AuthLogic {
    // 생성자 정의 ; 자바와는 다르게 선언 없이 초기화 가능
    // firebaseAuth 변수명, googleProvider 변수명 <- 전역 변수
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  // 로그인 시도 시 구글 인증인지 깃허브 인증인지 문자열로 넘겨 받음
  // 구글 인증 경우 : Google
  // 깃허브 인증 경우 : Github
  login(providerName) {
    console.log("providerName : " + providerName);
    // 파라미터로 넘겨 받은 문자열로 비교하여 각 제공자의 객체 주입 받음
    const authProvider = this.getProvider(providerName);
    // 제공자의 정보이면 팝업을 띄워 로그인 진행하도록 유도
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
  // 로그아웃 버튼 클릭 시 호출
  logout() {
    this.firebaseAuth.signOut();
  }
  // 사용자가 변경되는지 지속적으로 체크하여 변경될 때마다 호출
  onAuthChange(onUserChanged) {
    // 사용자가 바뀌었을 때 콜백함수를 받아서
    this.firebaseAuth.onAuthStateChanged((user) => {
      // 사용자가 바뀔 때마다
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}
/* 외부 js에서 사용하려면 반드시 추가할 것  */
/* 왜 리덕스를 공부해야 하나? ...몰라 난 몰라... */
export default AuthLogic;