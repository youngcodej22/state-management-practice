# state-management-practice

practice for Redux and etc...

---

# Redux

Redux란? 상태관리(state management) 라이브러리

## 사용 하는 이유와 문제점?

React로만 작업하게 되면 A-component에 있는 state를 B-component에서 사용하고 싶을 때가 있는데 state management 도구를 따로 사용하지 않으면 React에 props를 사용해야한다. 작업 시 props를 사용해도 된다. 하지만 component가 A,B,C,D,E... 부모 자식 계층 구조로 많아지게 된다면.. props로 해결하기가 짜증이 날 것이다. 이때 Redux라는 state 변경 관리를 쉽게 해주는 도구를 사용한다.

## Redux의 특징

1. Redux는 하나의 store라는 저장소에서 state들을 관리한다. 그래서 store에 있는 state를 사용할 component에 연결시켜 사용하면 된다.(React의 props 사용할 때 처럼 component끼리 계속 넘겨주는 방식 안해도된다.)
2. 상태 관리(state management)를 하기 쉽다.

### 주의 사항

1. `...state`와 같이 상태 객체는 항상 복사하여 '불변성(immutable)'지켜야 한다. (부작용: 그냥`state`로 코드를 넣으면 localstorage에 저장시 `state`객체가 계속 생겨난다.)

## Redux 사용 코드

### store에 있는 state를 component와 연결하는 방법

```
import { useSelector } from 'react-redux';
function App () {
  const store에서 꺼내온 state = useSelector((state) => state);

  return (<div>{store에서 꺼내온 state}</div>)
}
```

### component에서 store에 있는 state를 수정 요청

```
import { useDispatch } from 'react-redux';
function App () {
  // dispatch: 보내다(파견)
  // 즉, component에서 수정하는 것이 아니고, 수정요청을 보내서(dispatch) store에서 state가 변하도록 하는 것이다.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>count button</h2>
      <button onClick={()=>{
        dispatch({type: 'increase'})
      }}>더하기</button>
    </div>
    )
}
```

## Middleware

- thunk, saga, observable 다 괜찮다
- thunk는 미들웨어 설명에 적합한 것 뿐
- 툴킷이 여러가지 리듀서 (동시에 툴킷에서 핸들하기 어려운 경우가 있어서, 근데 툴킷 쓴다 99프로)

## 작업 순서

1. action-type을 만든다.
2. action을 만든다
3. reducer를 만든다
4. rootReducer와 연결한다
5. store에 연결한다

## redux 단점

- reducer 같은 코드를 계속해서 작성하게 된다.
