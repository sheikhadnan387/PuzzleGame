import React, {useEffect, useState, FC} from 'react';
import {Text, FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Constants from '../../constants';
import {GetLeaderBoard} from '../../utils/helper';
import {LeaderboardItem} from '../../Interfaces';

const LeaderBoard: FC = () => {
  const insets = useSafeAreaInsets();
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);

  // fetch the data from async storage
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboardData: LeaderboardItem[] = await GetLeaderBoard();
      setLeaderboard(leaderboardData);
    };

    fetchLeaderboard();
  }, []);

  return (
    <LinearGradient
      colors={Constants.Gradient}
      style={[styles.container, {paddingTop: Math.max(insets.top, 16)}]}>
      <Text style={styles.header}>Leader Board</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index?.toString()}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={styles.header_text}>No.</Text>
            <Text style={styles.header_text}>Date</Text>
            <Text style={styles.header_text}>Score</Text>
          </View>
        )}
        renderItem={({item, index}) => (
          <View style={styles.scoreRow}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.date}>
              {new Date(item?.date).toLocaleString()}
            </Text>
            <Text style={styles.score}>{item?.score}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
};

export default LeaderBoard;
