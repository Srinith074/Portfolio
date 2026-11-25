import Link from 'next/link';
import {notFound} from 'next/navigation';
import data from '../../../data.json';
import {ProjectArt} from '../../../components/ui';
const slug=(title:string)=>title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,'');
export function generateStaticParams(){return data.projects.map(p=>({slug:slug(p.title)}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug:id}=await params;const p=data.projects.find(p=>slug(p.title)===id);return {title:p?.title??'Project',description:p?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug:id}=await params;const p=data.projects.find(p=>slug(p.title)===id);if(!p)notFound();return <article className="section case-study"><Link href="/projects">← All projects</Link><p className="kicker">{p.label}</p><h1 className="page-title">{p.title}<span>.</span></h1><p className="intro">{p.description}</p><div className="art case-art"><ProjectArt kind={p.art}/><span>CONCEPT GRAPHIC</span></div><div className="case-grid"><div><h2>Project overview</h2><p>{p.details}</p></div><aside className="panel"><h3>Project information</h3><p>{p.status}</p><div className="tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="flex flex-wrap gap-3"><a className="button" href={p.source}>Source code ↗</a>{p.demo&&<a className="button" href={p.demo}>Live demo ↗</a>}</div></aside></div></article>}
