import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="heading heading__h1--l">{siteConfig.tagline}</h1>
        <p className="heading heading__h1--s">Gjør oss konsistent, minimerer dobbeltarbeid og hjelp oss <br/> med å bygge gode og helhetlige brukeropplevelser</p>
          <button className="button button__green--primary button--l"><Link className={styles.button__link} to="/omkvib">Kom i gang</Link></button>
      </div>
    </header>
  );
}

export default function Index() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hjem ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
