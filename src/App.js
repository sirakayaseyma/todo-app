
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <>
      <section className='todoapp'>
      <Header/>
      <Content />
   
    </section>
    <Footer />
    </>
  
  );
}

export default App;
