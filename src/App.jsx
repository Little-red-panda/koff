import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { Main } from "./views/Main/Main";
import { Loading } from "./components/Loading/Loading";

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <Loading />}
      <Footer />
    </>
  );
};

export default App;
