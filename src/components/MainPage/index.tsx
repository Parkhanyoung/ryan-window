import { List, Scroller } from '../windowing';
import MacMockup from '@/assets/mac-mockup.webp';
import * as styles from './MainPage.module.css';
import { CSSProperties } from 'styled-components';
import { PropsWithChildren } from 'react';
import { type MockData, mockData } from './mockData';

export default function MainPage() {
  return (
    <div id="main-page-container">
      <Header />
      <Container>
        <Scroller height={313}>
          <Description />
          <List data={mockData} itemHeight={55} offsetTop={100} overscanCount={2}>
            {Row}
          </List>
        </Scroller>
      </Container>
    </div>
  );
}

function Header() {
  return <header className={styles.header}>⚛️ How to Implement Windowing</header>;
}

function Container({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.mainPageWrapper}>
        <img className={styles.macMockupImg} src={MacMockup} />
        <div className={styles.windowWrapper}>
          <div className={styles.window}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className={styles.windowDescription}>
      <span>
        This page is implemented using{' '}
        <a
          href="https://praekiko.medium.com/what-is-windowing-also-i-have-heard-about-react-window-and-react-virtualized-c29dc843f4e0"
          target="_blank"
        >
          <span className={styles.link}>windowing </span>
        </a>
        🚀
      </span>
      <span>
        You can check out the code{' '}
        <a
          href="https://github.com/Parkhanyoung/ryan-window/tree/master/src/components"
          target="_blank"
        >
          <span className={styles.link}> here!</span>
        </a>{' '}
      </span>
    </div>
  );
}

function Row({ data, style }: { data: MockData; style: CSSProperties }) {
  return (
    <li className={styles.row} key={data.id} style={style}>
      <div className={styles.item}>
        <span>This is item number {data.id}</span>
      </div>
    </li>
  );
}
