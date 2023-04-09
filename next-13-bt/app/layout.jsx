import { Poppins } from 'next/font/google';
import Header from './componets/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
// style is specified, which includes the normal and italic styles.so now
// the font will be downloaded in both normal and italic styles.

// latin subset is specified, which includes the characters used in most
// Latin-script languages, such as English, Spanish, French, and German.

// display: 'swap' is specified, which causes the font to be downloaded
// immediately, but rendered only after the page is loaded.

export const metadata = {
  title: 'Traversy Media',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
