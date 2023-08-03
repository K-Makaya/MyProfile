import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[My Self Introduction]</p>
	<p>〜My Favolites〜</p>
	<p>SPORT : Tennis</p>
	<p>FOOD  : Paella</p>
	<p>MUSIC : Guitar of "Bump of Chicken"</p>
	<p>THING : To make something</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
