import { List, Scroller } from './windowing';
import MacMockup from '@/assets/mac-mockup.webp';

const generateData = (length: number) => {
  return Array.from({ length }).map((_, index) => ({
    id: index,
    thumbnail: `https://placehold.co/120x120/orange/white?text=item+${index}`,
  }));
};

const dataList = generateData(10000);

export default function MainPage() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-5rem)',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img src={MacMockup} style={{ width: '60rem' }} />
        <div
          style={{
            border: '1px solid black',
            width: '55.6rem',
            height: '315px',
            position: 'absolute',
            top: 29,
            left: 22,
          }}
        >
          <div style={{ background: 'white' }}>
            <Scroller height={313}>
              <List dataList={dataList} itemHeight={55} offsetTop={0} overscanCount={2}>
                {({ data, style }) => {
                  return (
                    <li
                      className="row"
                      key={data.id}
                      style={{
                        width: 'fit-content',
                        ...style,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '20rem',
                          height: '4rem',
                          padding: '0.5rem',
                          gap: '1rem',
                          backgroundColor: 'lightblue',
                        }}
                      >
                        <img src={data.thumbnail} style={{ width: '4rem', height: '4rem' }} />
                        <span>{data.id}번째 아이템입니다</span>
                      </div>
                    </li>
                  );
                }}
              </List>
            </Scroller>
          </div>
        </div>
      </div>
    </div>
  );
}
