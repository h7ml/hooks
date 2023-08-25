import { useVirtualList } from '@dext7r/hooks';
import { Input, List } from 'antd';
import { useState } from 'react';

const allItems = Array.from(Array(9999).keys()).map((i) => ({
  height: i % 2 === 0 ? 42 : 84,
  size: i % 2 === 0 ? 'small' : 'large',
}));

const virtualListOptions = {
  containerHeight: 400, // Set the height of the container as required
  itemHeight: 50, // Set the fixed height of each item or provide a function for dynamic height
  overscan: 10, // Set the number of extra buffer items outside of the view area
};

const VirtualListExample = () => {
  const [search, setSearch] = useState('');

  const filteredItems = allItems.filter((item) => item.size.startsWith(search.toLowerCase()));

  const { list, scrollTo, containerProps, wrapperProps } = useVirtualList(
    filteredItems,
    virtualListOptions,
  );

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Input.Search
          placeholder="e.g. small, medium, large"
          onChange={(e) => {
            setSearch(e.target.value);
            scrollTo(0); // Scroll to the top when search filters are updated
          }}
          style={{ width: '20rem' }}
        />
      </div>
      <div {...containerProps}>
        <div {...wrapperProps}>
          <List
            dataSource={list}
            renderItem={(item) => (
              <List.Item style={{ height: item.data.height }}>
                Row {item.index} ({item.data.size})
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualListExample;
