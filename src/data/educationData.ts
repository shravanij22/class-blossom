import { SchoolLevel, Topic, Game } from '@/types/education';
import { gamesByModule } from './games';

const createTopics = (count: number): Topic[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Environmental Topic ${i + 1}`,
    description: `Learn about important environmental concepts and sustainability practices.`,
    completed: false,
    progress: 0,
  }));
};

const commonGames: Game[] = [
  {
    id: 'eco-quiz',
    title: 'Eco Quiz Adventure',
    description: 'Test your knowledge about environment and sustainability through an exciting quiz journey.',
    icon: '❓',
    difficulty: 'medium',
    category: 'quiz',
  },
  {
    id: 'eco-builder',
    title: 'Eco Builder',
    description: 'Build and maintain a balanced ecosystem! Earn sustainability points before the 60-second timer runs out.',
    icon: '👷',
    difficulty: 'hard',
    category: 'builder',
  },
  {
    id: 'eco-memory',
    title: 'Eco Memory Match',
    description: 'Flip cards to match environmental concepts before the timer runs out!',
    icon: '🧠',
    difficulty: 'easy',
    category: 'memory',
  },
  {
    id: 'climate-puzzle',
    title: 'Climate Puzzle',
    description: 'Solve environmental puzzles and learn about climate change solutions.',
    icon: '🧩',
    difficulty: 'medium',
    category: 'puzzle',
  },
];

export const educationData: SchoolLevel[] = [
  {
    id: 'primary',
    name: 'Primary School Standard',
    topics: createTopics(8),
    games: gamesByModule.primary,
    overallProgress: 0,
  },
  {
    id: 'middle',
    name: 'Middle School Standard',
    topics: createTopics(12),
    games: gamesByModule.middle,
    overallProgress: 0,
  },
  {
    id: 'secondary',
    name: 'Secondary School Standard',
    topics: createTopics(15),
    games: gamesByModule.secondary,
    overallProgress: 0,
  },
  {
    id: 'higher',
    name: 'Higher Secondary Standard',
    topics: createTopics(18),
    games: gamesByModule.higher,
    overallProgress: 0,
  },
];

export const getSchoolLevel = (levelId: string): SchoolLevel | undefined => {
  return educationData.find(level => level.id === levelId);
};