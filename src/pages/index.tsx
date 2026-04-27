import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              XI&apos;AN UNIVERSITY OF POSTS & TELECOMMUNICATIONS
            </span>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              面向软件工程、系统研发与团队协作能力培养，构建集学习、实践、竞赛、项目孵化于一体的技术成长社区。
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                了解实验室
              </Link>
              <Link className="button button--outline button--lg" to="/blog">
                查看动态
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroCard}>
              <h3>核心方向</h3>
              <ul>
                <li>Web 全栈开发</li>
                <li>后端系统设计</li>
                <li>工程化与 DevOps</li>
                <li>开源协作与竞赛实践</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="西安邮电大学 EPI 软件实验室官网，展示实验室介绍、培养方向、项目实践与招新信息。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
