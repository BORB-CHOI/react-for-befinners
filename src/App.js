import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// import Button from "./Button";
// import styles from "./App.module.css";

/* useEffect란?

  useEffect는, 컴포넌트가 특정 순간마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
  useEffect를 사용하면, 함수형 컴포넌트에서도 componentDidMount, componentDidUpdate, componentWillUnmount의 기능을 수행할 수 있다.

  useEffect를 사용할 때는, 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)을 넣는다.
  만약에, 컴포넌트가 처음 렌더링 될 때만 실행하고, 업데이트 될 때는 실행하지 않으려면 두번째 파라미터로 비어있는 배열을 넣으면 된다.

  useEffect를 사용할 때 주의사항

  1. useEffect에 등록하는 함수는, 렌더링이 완료된 후에 비동기로 실행된다.
  2. useEffect를 사용할 때는, useEffect 내부에서 사용하는 상태나, props가 있다면, useEffect의 deps 배열 안에 포함시켜야 한다.
  3. 만약에, 등록한 함수에서 props를 참조해야 한다면, useEffect의 deps 배열 안에 꼭 포함시켜주어야 한다.
  4. 만약에, 등록한 함수에서 useState를 사용한다면, useEffect의 deps 배열 안에 꼭 포함시켜주어야 한다.
  5. 만약에, 등록한 함수에서 특정 DOM을 선택해야 한다면, useEffect의 deps 배열 안에 꼭 포함시켜주어야 한다.

  useEffect를 사용할 때 주의사항을 잘 지키지 않으면, 버그의 원인이 되므로 꼭 지켜주어야 한다. 
*/
/* map란?

  map은, 배열 안에 있는 각 원소를 변환하여 새로운 배열을 만들어주는 함수이다. 
  예를 들어서, [1, 2, 3, 4, 5]라는 배열이 있을 때, 이 배열 안에 있는 모든 원소를 제곱하여 새로운 배열을 만들고 싶다면, 다음과 같이 하면 된다.

  const numbers = [1, 2, 3, 4, 5];
  const squared = numbers.map(n => n * n);
  console.log(squared); // [1, 4, 9, 16, 25]

  map 함수의 파라미터에는 변환 함수를 전달해주어야 하고, 이 함수는 파라미터로 받아온 값을 원하는 형태로 변환하여 반환해주어야 한다.
  참고로 React에는 key라는 props를 설정해야 하는데, 이 값은 각 원소들마다 가지고 있는 고유값으로 설정해주어야 한다.
  만약에, 고유값이 없다면, map 함수에 전달되는 콜백 함수의 두번째 파라미터 index를 사용하면 된다.
  key는 React.js 에서만, map 안에서 component를 render할 때 사용한다.

  map 함수를 사용할 때 주의사항

  1. map 함수를 사용할 때는, 배열 안에 있는 원소들이 어떤 구조를 가지고 있는지 확인을 하고 사용해야 한다.
  2. map 함수의 파라미터로 전달되는 함수 내부에서, 반드시 어떤 값을 반환해야 한다.
  3. map 함수는 기존 배열은 그대로 두고, 새로운 배열을 반환한다.

  map 함수를 사용할 때 주의사항을 잘 지키지 않으면, 버그의 원인이 되므로 꼭 지켜주어야 한다.
*/
/* Link란? 
  Link는, 클릭하면 다른 주소로 이동시켜 주는 컴포넌트이다.
  일반 웹 애플리케이션에서는 a 태그를 사용하여 페이지를 전환하는데, 리액트 라우터를 사용할 때는 이 태그를 직접 사용하면 안된다. 

  a 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버리게 된다. 
  또한, 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버리게 된다.  
  그렇기 때문에, 애플리케이션 내부에서 라우터를 사용하여 페이지를 전환할 때는, a 태그를 사용해서는 안되고, Link 컴포넌트를 사용해야 한다. 

  Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있다.
  Link 컴포넌트는, HTML5 History API를 사용하여 브라우저의 주소만 변경해준다.
  그래서, 페이지를 새로 불러오지 않고도 페이지의 주소만 변경해 줄 수 있다.  
*/

// .To Dos.
// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => {
//     setToDo(event.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       alert("할 일을 입력해주세요!");
//       return;
//     }
//     setToDo("");
//     setToDos([...toDos, toDo]);
//   };

//   return (
//     <div>
//       {/* <h1 className={styles.title}>Welcome to React!</h1>
//       <Button text="hello" /> */}
//       <h1>To Do List</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         ></input>
//         <button type="submit">Add</button>
//       </form>
//       <hr />

//       <ul>
//         {toDos.map((toDo, index) => (
//           <li key={index}>{toDo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// .Coin Tracker.
// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/coins")
//       .then((response) => response.json())
//       .then((data) => {
//         setCoins(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? (
//         <h3>Loading...</h3>
//       ) : (
//         <ul>
//           {coins.map((coin) => (
//             <li key={coin.id}>{coin.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// .The Movie App.
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
