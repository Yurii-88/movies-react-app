import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
