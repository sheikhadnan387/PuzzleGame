import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {navigate} from '../../../rootNavigation';
import ROUTES from '../../utils/routes';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../constants';
import Button from '../../components/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Category} from '../../Interfaces';
import {useToast} from 'react-native-toast-notifications';

const CategorySelection = () => {
  const insets = useSafeAreaInsets();
  const toast = useToast();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handlePlay = () => {
    if (selectedCategory) {
      navigate(ROUTES.PlayGame, {category: selectedCategory});
    } else {
      toast.show('Please select a category', {
        type: 'danger',
      });
    }
  };

  return (
    <LinearGradient
      colors={Constants.Gradient}
      style={[styles.container, {paddingTop: Math.max(insets.top, 16)}]}>
      <Text style={styles.simple_text}>Words Puzzle</Text>
      <View style={styles.list_container}>
        {Constants.categories.map(category => (
          <Button
            key={category.id}
            onClick={() => handleCategorySelect(category)}
            title={category.name}
            btninnerstyle={
              selectedCategory?.id === category.id
                ? styles.btn_selected
                : styles.btn_inner
            }
            btnstyle={styles.btn}
            useAngle={true}
            angle={50}
            btnTexstyle={styles.btn_text}
          />
        ))}
      </View>
      <Button
        onClick={handlePlay}
        title="Start"
        btninnerstyle={styles.btn_inner}
        btnstyle={styles.startBtn}
        useAngle={true}
        angle={50}
        btnTexstyle={styles.btn_text}
      />
      <TouchableOpacity onPress={() => navigate(ROUTES.LeaderBoard)}>
        <Text style={styles.leader_text}>Leader Board</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CategorySelection;
