### React hook

useState
useCallback
useRef
useReducer
useMemo
useEffect

### React의 컴포넌트 리렌더링을 방지할 때

클래스형 컴포넌트

> shouldComponentUpdate

함수형 컴포넌트

> React.memo

### 컴포넌트 최적화를 위한 또다른 방법

useState의 함수형 업데이트

```
const [number, setNumber] = useState(0);

const onIncrese = useCallback(
    () => setNumber(prevNumber => prevNumber + 1),
    [],
)
```

> setNumber(number + 1); 을 하는 것이 아니라, 위 코드처럼 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣어준다. 이렇게 함으로써 useCallback을 사용할 때 두 번째 파라미터 배열에 number를 넣지 않아도 된다.

> 전개 연산자를 사용하여 객체나 배열 내부의 값을 복사할 때는 얕은 복사를 한다. 얕은 복사란, 내부의 값이 완전히 새로 복사되는 것이 아니라 가장 바깥쪽에 있는 값만 복사하는 것

react-virtualized를 사용한 렌더링 최적화

> 스크롤하기 전에는 보이지 않는 컴포넌트를 모두 렌더링하면 비효율적이므로, 스크롤을 할 때, 그 위치에 보여주어야 할 컴포넌트를 자연스럽게 렌더링

### Router

리액트 라우터는 클라이언트 사이드에서 이루어지는 라우팅을 아주 간단하게 구현할 수 있도록 해준다

> SPA는 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여줄 수 있다

> 다른 주소에 다른 화면을 보여 주는 것이 `라우팅`
