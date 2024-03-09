import React, {memo} from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../constants';
import {Theme} from '../../utils/theme';

interface Props {
  onClick?: () => void;
  title: string;
  btnstyle?: any;
  btnTexstyle?: any;
  btninnerstyle?: any;
  gradient?: any;
  useAngle?: boolean;
  angle?: any;
  loading?: boolean;
  disabled?: boolean;
  activeOpacity?: number;
}
const Button: React.FC<Props> = memo(
  ({
    onClick,
    title,
    btnstyle,
    btnTexstyle,
    btninnerstyle,
    gradient,
    useAngle,
    angle,
    loading,
    disabled,
    activeOpacity,
  }) => {
    return (
      <LinearGradient
        useAngle={useAngle}
        angle={angle}
        style={[styles.btn_linear, {...btnstyle}]}
        colors={gradient ? gradient : Constants.Gradient}>
        <TouchableOpacity
          onPress={onClick}
          disabled={disabled ? disabled : loading}
          activeOpacity={activeOpacity ? activeOpacity : 0.96}
          style={[styles.btn_start, {...btninnerstyle}]}>
          {loading ? (
            <ActivityIndicator
              size={'small'}
              color={Theme.white}
              animating={loading}
              style={{
                flex: 1,
              }}
            />
          ) : (
            <Text style={[styles.btn_text, {...btnTexstyle}]}>{title}</Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    );
  },
);

export default Button;
