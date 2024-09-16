import { useWindowingContext } from '../hooks/useWindowingContext';
import { calculateVisibleBounds } from '../utils/calculateVisibleBounds';
import WindowingInfo from './WindowingInfo';

type WindowingChildren<T> = ({
  index,
  data,
  style,
}: {
  index: number;
  data: T;
  style: Record<string, string | number>;
}) => React.ReactNode;

interface WindowingListProps<T> {
  data: T[];
  itemHeight: number;
  offsetTop: number;
  overscanCount?: number;
  children: WindowingChildren<T>;
}

const List = <T,>({
  itemHeight,
  data,
  offsetTop,
  overscanCount = 3,
  children,
}: WindowingListProps<T>) => {
  const { scrollerHeight, scrollTop } = useWindowingContext();

  const { start, end, scrollOffset } = calculateVisibleBounds({
    scrollTop,
    offsetTop,
    itemHeight,
    scrollerHeight,
    totalLength: data.length,
    overscanCount,
  });

  const estimatedHeight = itemHeight * data.length;

  return (
    <div style={{ height: estimatedHeight }}>
      <ul style={{ transform: `translateY(${scrollOffset}px)` }}>
        {data.slice(start, end).map((data, index) => {
          const style = { height: itemHeight };

          return children({ index, data, style });
        })}
      </ul>
      {/* The component below is for explanation purposes only */}
      <WindowingInfo data={data} scrollOffset={scrollOffset} start={start} end={end} />,
    </div>
  );
};

export default List;
