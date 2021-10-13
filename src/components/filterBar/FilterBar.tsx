import React, {Fragment, useState} from 'react';
import {View, Text} from 'react-native';
import {IFilterBarProps} from '../../helpers/ts-helpers/interfaces';
import FilterButton from './filterButton/FilterButton';
import styles from './styles';

const FilterBar: React.FC<IFilterBarProps> = ({data, onValueChange}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.filterBarContainerStyle}>
      <Text>search by:</Text>

      {data.map((item, index: number) => (
        <Fragment key={index}>
          <FilterButton
            key={item.id}
            id={index}
            text={item.title}
            selectedIndex={selectedIndex}
            callback={(id: number) => {
              setSelectedIndex(id);

              if (onValueChange) {
                onValueChange(item.title);
              }
            }}
          />
          <Text style={styles.slash} key={item.title}>
            /
          </Text>
        </Fragment>
      ))}
    </View>
  );
};

export default FilterBar;
