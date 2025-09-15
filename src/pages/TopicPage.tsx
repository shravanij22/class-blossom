import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import YouTubePlayer from '@/components/YouTubePlayer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';
import { getSchoolLevel } from '@/data/educationData';
import { toast } from 'sonner';

const TopicPage = () => {
  const { levelId, topicId } = useParams();
  const navigate = useNavigate();
  const [watchProgress, setWatchProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const schoolLevel = getSchoolLevel(levelId || '');
  const topic = schoolLevel?.topics.find(t => t.id === Number(topicId));

  const handleProgressUpdate = (progress: number, completed: boolean) => {
    setWatchProgress(progress);
    if (completed && !isCompleted) {
      setIsCompleted(true);
      toast.success("Topic completed! 🎉");
    }
  };

  if (!schoolLevel || !topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-education-light/30 to-education-card/20">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center p-8">
              <p>Topic not found!</p>
              <Button onClick={() => navigate('/classes')} className="mt-4">
                Back to Classes
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-education-primary/20 to-education-light/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/level/${levelId}`)}
            className="mb-4 hover:bg-white/20 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
        </div>

        <div className="bg-education-primary rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            {topic.title}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <YouTubePlayer
                videoId={topic.videoId}
                levelId={levelId || ''}
                topicId={Number(topicId)}
                onProgressUpdate={handleProgressUpdate}
              />
            </div>
            
            <div className="text-center text-white">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeDasharray={`${watchProgress}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {isCompleted ? (
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  ) : (
                    <span className="text-xl font-bold">{watchProgress}%</span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isCompleted ? 'Complete!' : `${watchProgress}% Watched`}
              </h3>
              <p className="text-white/80">
                Real-time progress tracking as you watch
              </p>
              {topic.duration && (
                <p className="text-white/60 text-sm mt-2">
                  Duration: {Math.floor(topic.duration / 60)}:{(topic.duration % 60).toString().padStart(2, '0')}
                </p>
              )}
            </div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-education-primary">
              {topic.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>

            <div className="mt-8 p-6 bg-education-light/20 rounded-lg">
              <h4 className="font-semibold mb-4 text-education-text">Learning Objectives:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Understand key environmental concepts and terminology</li>
                <li>• Learn about sustainability and conservation practices</li>
                <li>• Explore real-world examples and case studies</li>
                <li>• Discover how individuals can make a positive impact</li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => navigate('/games')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
                disabled={!isCompleted}
              >
                <Play className="w-5 h-5 mr-2" />
                {isCompleted ? 'Play Related Games' : 'Complete Video to Unlock Games'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TopicPage;