import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../utils/ThemeProvider';

import 'normalize.css';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ThemeProvider>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
