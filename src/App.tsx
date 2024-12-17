import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import withLoading from './hooks/withLoading';

function App() {
  const [count, setCount] = useState(0);

  const renderComponent = ({ isLoading }: { isLoading: boolean }) => {
    return <>{isLoading ? <>lloading</> : <h1>hahaha</h1>}</>;
  };
  const WithLoadingPage = withLoading(renderComponent);
  return (
    <>
      <div>
        <WithLoadingPage />
      </div>
    </>
  );
}

export default App;
