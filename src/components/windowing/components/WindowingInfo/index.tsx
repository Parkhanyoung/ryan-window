import { createPortal } from 'react-dom';
import * as styles from './WindowingInfo.module.css';

export default function WindowingInfo<T>({
  data,
  scrollOffset,
  start,
  end,
}: {
  data: T[];
  scrollOffset: number;
  start: number;
  end: number;
}) {
  return (
    <>
      {createPortal(
        <div className={styles.container}>
          <div>
            <strong>Total item count:</strong> {data.length}
          </div>
          <div>
            <strong>Currently rendered range:</strong> {start} to {end - 1} (Total:{' '}
            {end - start + 1} items)
          </div>
          <div>
            <strong>Scroll position (excluding offsetTop):</strong> {scrollOffset}px
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
