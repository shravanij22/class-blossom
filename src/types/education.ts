export interface Topic {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  completed: boolean;
  progress: number;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'quiz' | 'builder' | 'memory' | 'puzzle';
}

export interface SchoolLevel {
  id: string;
  name: string;
  topics: Topic[];
  games: Game[];
  overallProgress: number;
}

export interface GameState {
  score: number;
  level: number;
  timeRemaining: number;
  isPlaying: boolean;
  gameOver: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}