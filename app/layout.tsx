import type {Metadata} from 'next';import './globals.css';import './reward.css';
export const metadata:Metadata={title:'Banana Blade: Path to Paradise',description:'A 100-level katana platforming adventure.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
