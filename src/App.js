import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './page/Login';
import All from './page/All';
import ProductDetails from './page/ProductDetails';
import Navbar from './component/Navbar';
import PrivatePage from './navigate/PrivatePage';

/*
1. navbar 만들기 (1-로고/로그인/search)(2-메뉴) 0
2. db json 만들기 -> 연결 0
3. ProductCard 만들기 (제품명/금액/런웨이제품TF) 0
4. 로그인창 만들기 0 
5. 로고 클릭 -> All 창으로 돌아가기 0
6. 제품 클릭 -> 크기 커지기 0 
 6-1. (로그인 X -> False -> 로그인 창 뜸) (로그인 0 -> true -> 제품 상세(private page))
7. 검색창 -> 단어 입력 -> fitter

*/

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<All />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivatePage authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
