import {Platform} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//screen animation
export const screenAnimation = {
  cardStyleInterpolator:
    Platform.OS == 'ios'
      ? CardStyleInterpolators.forHorizontalIOS
      : CardStyleInterpolators.forHorizontalIOS,

  detachPreviousScreen: false,
};

// update the score
export const updateScore = async (newScore: number) => {
  try {
    const leaderboardString = await AsyncStorage.getItem('leaderboard');
    let leaderboard = leaderboardString ? JSON.parse(leaderboardString) : [];

    leaderboard.push({score: newScore, date: new Date().toISOString()});

    leaderboard = leaderboard.sort((a: any, b: any) => b.score - a.score);

    leaderboard = leaderboard.slice(0, 10);

    await AsyncStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  } catch (error) {
    console.error('Failed to update score', error);
  }
};

// Get Score
export const GetLeaderBoard = async () => {
  try {
    const leaderboardString = await AsyncStorage.getItem('leaderboard');
    return leaderboardString ? JSON.parse(leaderboardString) : [];
  } catch (error) {
    console.error('Failed to fetch leaderboard', error);
    return [];
  }
};
