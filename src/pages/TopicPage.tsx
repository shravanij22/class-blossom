import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';
import { getSchoolLevel } from '@/data/educationData';
import { toast } from 'sonner';

const TopicPage = () => {
  const { levelId, topicId } = useParams();
  const navigate = useNavigate();
  const [watchProgress, setWatchProgress] = useState(0);
  const [isWatched, setIsWatched] = useState(false);

  const schoolLevel = getSchoolLevel(levelId || '');
  const topic = schoolLevel?.topics.find(t => t.id === Number(topicId));

  useEffect(() => {
    if (watchProgress >= 100 && !isWatched) {
      setIsWatched(true);
      toast.success("Topic completed! 🎉");
    }
  }, [watchProgress, isWatched]);

  const handleWatchVideo = () => {
    // Simulate video watching progress
    const interval = setInterval(() => {
      setWatchProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
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
            Our Changing Earth
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-2">GEOGRAPHY</h3>
                <h4 className="text-lg mb-2">CHAPTER - {topic.id}</h4>
                <h2 className="text-2xl font-bold">OUR CHANGING EARTH</h2>
                <Button 
                  onClick={handleWatchVideo}
                  className="mt-4 bg-red-600 hover:bg-red-700"
                  disabled={watchProgress > 0 && watchProgress < 100}
                >
                  {watchProgress === 0 ? 'Watch on YouTube' : 
                   watchProgress === 100 ? 'Video Complete' : 'Watching...'}
                </Button>
              </div>
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
                  {isWatched ? (
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  ) : (
                    <span className="text-xl font-bold">{watchProgress}%</span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isWatched ? 'Complete!' : `${watchProgress}% Watched`}
              </h3>
              <p className="text-white/80">
                Video progress will update as you watch
              </p>
            </div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-education-primary">
              Forces Acting on the Earth's Surface
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-education-primary rounded-full mt-2"></div>
                <p><strong>Endogenic forces</strong> → forces inside the Earth.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-education-primary rounded-full mt-2"></div>
                <p><strong>Exogenic forces</strong> → forces on the Earth's surface.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-education-light/20 rounded-lg">
              <h4 className="font-semibold mb-4 text-education-text">Learning Objectives:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Understand the difference between endogenic and exogenic forces</li>
                <li>• Learn how these forces shape our planet's surface</li>
                <li>• Explore examples of geological processes</li>
                <li>• Discover the impact on human settlements</li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => navigate('/games')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Related Games
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TopicPage;