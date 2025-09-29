import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Calendar, MapPin } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Achievements = () => {
  // Mock achievements data - replace with actual Firebase data
  const achievements = [
    {
      id: 1,
      title: 'Best IEEE Student Branch Award',
      description: 'Recognized as the outstanding IEEE Student Branch for innovation in engineering education and community service.',
      date: '2024-11-15',
      category: 'award',
      location: 'IEEE Region 6 Conference',
      imageURL: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Branch recognition at regional level'
    },
    {
      id: 2,
      title: 'Outstanding Student Paper Competition',
      description: 'Alex Rodriguez won first place in the IEEE Student Paper Competition for research on 5G network optimization.',
      date: '2024-10-20',
      category: 'recognition',
      location: 'IEEE International Conference',
      imageURL: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Individual member excellence'
    },
    {
      id: 3,
      title: '1000+ Member Milestone',
      description: 'Successfully reached over 1000 registered members in our IEEE Student Branch community.',
      date: '2024-09-01',
      category: 'milestone',
      location: 'University Campus',
      imageURL: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Community growth achievement'
    },
    {
      id: 4,
      title: 'Innovation Challenge Winner',
      description: 'Our robotics team secured first place in the IEEE Innovation Challenge with their autonomous delivery system.',
      date: '2024-08-15',
      category: 'award',
      location: 'IEEE Innovation Summit',
      imageURL: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Technical innovation recognition'
    },
    {
      id: 5,
      title: 'Community Service Excellence',
      description: 'Awarded for outstanding community service through STEM education programs in local schools.',
      date: '2024-07-10',
      category: 'recognition',
      location: 'City Hall',
      imageURL: 'https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Community impact recognition'
    },
    {
      id: 6,
      title: '50th Publication Milestone',
      description: 'Reached the significant milestone of 50 published research papers by our student branch members.',
      date: '2024-06-01',
      category: 'milestone',
      location: 'University Library',
      imageURL: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
      impact: 'Research productivity milestone'
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'award':
        return Trophy;
      case 'recognition':
        return Award;
      case 'milestone':
        return Star;
      default:
        return Medal;
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case 'award':
        return 'from-yellow-500 to-yellow-600';
      case 'recognition':
        return 'from-blue-500 to-blue-600';
      case 'milestone':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-green-500 to-green-600';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'award':
        return 'Award';
      case 'recognition':
        return 'Recognition';
      case 'milestone':
        return 'Milestone';
      default:
        return 'Achievement';
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Celebrating the milestones, awards, and recognition that showcase our commitment to excellence in engineering and innovation.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 hidden lg:block"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = getIcon(achievement.category);
                const iconColorClass = getIconColor(achievement.category);
                
                return (
                  <motion.div
                    key={achievement.id}
                    className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Timeline Icon */}
                    <div className="relative lg:absolute lg:left-4 z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${iconColorClass} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Achievement Card */}
                    <div className="flex-1 max-w-2xl">
                      <GlassCard className="p-8">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Image */}
                          <div className="lg:w-1/3">
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                              <img 
                                src={achievement.imageURL} 
                                alt={achievement.title}
                                className="w-full h-48 lg:h-32 object-cover"
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="lg:w-2/3">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                                  achievement.category === 'award' 
                                    ? 'bg-yellow-500/20 text-yellow-300'
                                    : achievement.category === 'recognition'
                                    ? 'bg-blue-500/20 text-blue-300'
                                    : 'bg-purple-500/20 text-purple-300'
                                }`}>
                                  {getCategoryLabel(achievement.category)}
                                </div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                                  {achievement.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-white/70 mb-4 leading-relaxed">
                              {achievement.description}
                            </p>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center space-x-2 text-white/60 text-sm">
                                <Calendar size={16} />
                                <span>{new Date(achievement.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-white/60 text-sm">
                                <MapPin size={16} />
                                <span>{achievement.location}</span>
                              </div>
                            </div>

                            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                              <div className="text-white/60 text-xs uppercase tracking-wide mb-1">Impact</div>
                              <div className="text-white font-medium text-sm">{achievement.impact}</div>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Achievement Statistics
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">25</div>
                  <div className="text-white/80 font-medium">Total Achievements</div>
                  <div className="text-white/60 text-sm mt-1">Since 2020</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">12</div>
                  <div className="text-white/80 font-medium">Awards Won</div>
                  <div className="text-white/60 text-sm mt-1">International & Regional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">8</div>
                  <div className="text-white/80 font-medium">Recognition</div>
                  <div className="text-white/60 text-sm mt-1">Community & Academic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">5</div>
                  <div className="text-white/80 font-medium">Milestones</div>
                  <div className="text-white/60 text-sm mt-1">Growth & Impact</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;