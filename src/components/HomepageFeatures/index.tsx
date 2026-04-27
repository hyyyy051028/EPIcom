import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: '工程实践驱动',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>围绕真实项目开展训练，从需求拆解、开发协作到部署交付，形成完整的软件工程能力闭环。</>,
  },
  {
    title: '团队成长体系',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>通过技术分享、组内 mentoring、阶段性考核与项目复盘，帮助成员建立长期成长路径。</>,
  },
  {
    title: '竞赛与开源协作',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>鼓励成员参与各类程序设计竞赛与开源活动，在更真实的协作环境中提升代码质量与影响力。</>,
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionTag}>ABOUT EPI</span>
          <Heading as="h2">以项目与协作为核心的实验室文化</Heading>
          <p>
            我们希望成员不仅会写代码，更具备面对复杂问题时的分析能力、沟通能力和持续迭代能力。
          </p>
        </div>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
