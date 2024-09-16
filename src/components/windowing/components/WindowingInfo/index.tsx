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
            <strong>Total item count:</strong> {data.length.toLocaleString()}
          </div>
          <div>
            <strong>Currently rendered range:</strong> {start.toLocaleString()} to {(end - 1).toLocaleString()} (Total:{' '}
            {end - start + 1} items)
          </div>
          <div>
            <strong>Scroll position (excluding offsetTop):</strong> {scrollOffset.toLocaleString()}px
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
