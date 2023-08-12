import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from 'GlobalStyle';
import Router from 'shared/Router';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'production') {
  console = window.console || {};
  console.log = function no_console() {};
  console.warn = function no_console() {};
  console.error = function () {};
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
