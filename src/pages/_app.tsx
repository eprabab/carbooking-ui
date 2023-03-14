import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import '@/styles/animate.css';
<link
	href='http://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic,900italic'
	rel='stylesheet'
	type='text/css'
/>;
import '@/styles/font-awesome.min.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
