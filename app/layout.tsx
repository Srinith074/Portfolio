import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/ui';
export const metadata: Metadata = {metadataBase:new URL('https://srinith.in'),title:{default:'Sana Srinith — AI & ML / Developer',template:'%s | Sana Srinith'},description:'B.Tech AI & ML student exploring machine learning and full-stack development. Open to internship opportunities.',openGraph:{type:'website',images:['/social-preview.png']},twitter:{card:'summary_large_image'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Header/><main className="shell">{children}</main><footer className="shell footer"><span><strong>SS. / Sana Srinith</strong><br/>© {new Date().getFullYear()} · Built with Next.js</span><a href="/contact">Contact ↗</a><a href="https://github.com/Srinith074">GitHub ↗</a><a href="https://www.linkedin.com/in/srinith-sana-a66741333/">LinkedIn ↗</a></footer></body></html>}
