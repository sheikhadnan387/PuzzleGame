import React, {createRef, FC, useEffect, useState, RefObject} from 'react';
import {TouchableOpacity, View, Text, Alert, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../constants';
import Button from '../../components/CustomButton';
import styles from './style';
import {StackProps, Category} from '../../Interfaces';
import {updateScore} from '../../utils/helper';
import {navigate} from '../../../rootNavigation';
import ROUTES from '../../utils/routes';
import {useToast} from 'react-native-toast-notifications';
import {Theme} from '../../utils/theme';

// shuffle the array of words
const shuffleArray = (array: string[]): string[] => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
// calculate score according to words
const calculateScore = (word: string): number => {
  return word.length + Math.floor(word.length / 3);
};

const PlayGame: FC<StackProps> = ({route}) => {
  const {id, name} = route.params?.category;
  const toast = useToast();
  const category: Category | undefined = Constants.categories.find(
    category => category?.id === id,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [inputRefs, setInputRefs] = useState<RefObject<TextInput>[]>([]);
  const [score, setScore] = useState<number>(0);
  const [shuffledAnswer, setShuffledAnswer] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);

  useEffect(() => {
    if (!category) return;
    const answer =
      category.questions[currentQuestionIndex].answer.toUpperCase();
    setShuffledAnswer(shuffleArray(answer.split('')));
    setUserAnswer(Array(answer.length).fill(''));
    setInputRefs(
      Array(answer.length)
        .fill('')
        .map(() => createRef<TextInput>()),
    );
  }, [currentQuestionIndex, category]);

  // when press on shuffle words
  const onLetterPress = (letter: string) => {
    const index = userAnswer.indexOf('');
    if (index !== -1) {
      const newUserAnswer = [...userAnswer];
      newUserAnswer[index] = letter;
      setUserAnswer(newUserAnswer);

      if (index < newUserAnswer.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };
  // when one input fill then it move another one
  const handleTextChange = (text: string, index: number) => {
    const newUserAnswers = [...userAnswer];
    newUserAnswers[index] = text.toUpperCase();
    setUserAnswer(newUserAnswers);

    if (text && index < newUserAnswers.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // skip the Question
  const onSkip = () => {
    if (!category) return;
    setCurrentQuestionIndex(
      (currentQuestionIndex + 1) % category.questions.length,
    );
  };

  // Submit his answer and compare with given input
  const onSubmit = async () => {
    if (!category) return;
    else {
      const answer =
        category?.questions[currentQuestionIndex].answer.toUpperCase();
      if (userAnswer.join('').length <= 0) return;
      if (userAnswer.join('') === answer) {
        const wordScore = calculateScore(answer);
        setScore(score + wordScore);
        toast.show(`Correct! Congratulation | You earn ${wordScore} points`, {
          type: 'success',
        });
        setCurrentQuestionIndex(
          (currentQuestionIndex + 1) % category?.questions?.length,
        );
      } else {
        toast.show('Incorrect Answer | Game is Over', {
          type: 'danger',
        });
        await updateScore(score);
        setScore(0);
        navigate(ROUTES.LeaderBoard);
      }
    }
  };

  return (
    <LinearGradient colors={Constants.Gradient} style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.inputContainer}>
          {userAnswer.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              onChangeText={text => handleTextChange(text, index)}
              value={userAnswer[index]}
              maxLength={1}
              ref={inputRefs[index]}
              autoCapitalize="characters"
              returnKeyType="done"
              selectionColor={Theme.gold}
            />
          ))}
        </View>
        <Text style={styles.question}>
          {category?.questions[currentQuestionIndex].question}
        </Text>

        <View style={styles.lettersContainer}>
          {shuffledAnswer.map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={styles.letter}
              onPress={() => onLetterPress(letter)}>
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.answer}>{userAnswer.join('')}</Text>
        <Text style={styles.question}>Score: {score}</Text>
        <Button
          title="Skip"
          btninnerstyle={styles.btn_inner}
          btnstyle={styles.btn}
          btnTexstyle={styles.btn_text}
          onClick={onSkip}
        />
        <Button
          title="Submit"
          btninnerstyle={styles.btn_inner}
          btnstyle={styles.btn}
          btnTexstyle={styles.btn_text}
          onClick={onSubmit}
        />
      </View>
    </LinearGradient>
  );
};

export default PlayGame;
