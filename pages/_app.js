import { Provider } from "react-redux";
import { store } from "../store/index.js";
import Layout from "../components/layouts/Layout.jsx";
import "../styles/style.scss";

// Кастомный app для поключения стилей, разметки, провайдера redux

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
