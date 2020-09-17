## TypeScript + React공부

**src/App.tsx**  
-typescript에서 state 사용하기

**src/Number.tsx**  
-typescript에서 props 사용하기  
-typescript에서 styled-component사용하기(숫자가 10이상이 되면 빨강으로 변함)

**src/Number.tsx**  
-typescript에서 event 사용하기  
*event 참고*  
https://reactjs.org/docs/events.html#gatsby-focus-wrapper

**src/styled.d.ts**   
-styled-components theme : variable을 정의하는 방법  
 => 계속 반복해서 복사 붙여넣기를 안하기 위해 사용
-styled.d.ts : typescript를 위해 정의하는 파일(없을 경우, theme을 쓰는 의미가 X)   
*문서 참조* https://styled-components.com/docs/api  

### **<그 외 알아둘 것>**
**./tsconfig.json** : typescirpt의 규칙을 설정해주는 곳
- "noImplicitAny": true  
해당 library가 없을 경우 설정해주기 -> 오류 안남

**node_modules를 다운 받을 때**  
https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
*definitely Typed* : 모든 react의 기능들을 typescript가 이해할 수 있게 설명해줌  
ex. styled-components만 install을 하는경우 styled에대한 type이 정해지지 않아 타입스크립트는 사용할 수 없음! => @types/styled-components를 다운받으면 styled-component안에 type들을 알려줌!