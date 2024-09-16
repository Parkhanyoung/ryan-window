export interface MockData {
  id: number;
  thumbnail: string;
}

const generateMockData = (length: number): MockData[] => {
  return Array.from({ length }).map((_, index) => ({
    id: index,
    thumbnail: `https://placehold.co/120x120/orange/white?text=item+${index}`,
  }));
};

export const mockData = generateMockData(10_000);
