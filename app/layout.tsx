import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const serif = localFont({src:[{path:'./fonts/serif.otf',weight:'400',style:'normal'},{path:'./fonts/italic.otf',weight:'400',style:'italic'}],variable:'--font-serif',display:'swap'});
const sans = localFont({src:'./fonts/sans.ttf',variable:'--font-sans',display:'swap'});
export const metadata: Metadata = {
 metadataBase: new URL('https://harish-tanvi-wedding.rajawatsinghabhishek.chatgpt.site'),
 title:'Harish & Tanvi | 20 November 2026',
 description:'Together with our families, we invite you to celebrate the wedding of Badavath Harish and Tanvi Avinash Salvi. 20 November 2026, Mumbai.',
 openGraph:{title:'Harish & Tanvi — A beautiful beginning',description:'Join our wedding celebration · 20 November 2026 · Mumbai',images:['/photos/invitation.jpg']},
 icons:{icon:'/favicon.svg'}
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>}
