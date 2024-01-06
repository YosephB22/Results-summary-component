import Result from '../../components/result';
import Summary from '../../components/summary';

const Home = () => {
  return (
    <main className="md:h-[100vh] w-[100vw] flex md:justify-center md:items-center">
      <div className="md:flex max-w-[46rem] shadow-2xl rounded-3xl">
        <Result />
        <Summary />
      </div>
    </main>
  );
};
export default Home;
