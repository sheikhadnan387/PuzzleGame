export interface Question {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

export interface StackProps {
  navigation?: any;
  route: {
    params: {
      category: Category;
    };
  };
}

export interface LeaderboardItem {
  score: string;
  date: string;
}
