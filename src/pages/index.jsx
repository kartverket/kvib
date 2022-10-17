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
        <h1 className="heading heading__h1--l">Velkommen til {siteConfig.tagline}</h1>
        <p className="heading heading__h1--s">VI ønsker å bidra til å gjøre oss mer konsise, minimere dobbeltarbeid og hjelpe oss med å bygge gode og helhetlige brukeropplevelser.</p>
          <Link className={styles.button__link} to="/omkvib"><button className="button button__green--primary button--l">Kom i gang</button></Link>
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
