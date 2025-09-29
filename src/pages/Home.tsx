import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, BookOpen, ArrowRight, Play } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Upcoming Events',
      description: 'Stay updated with the latest IEEE events, workshops, and seminars.',
      count: '12'
    },
    {
      icon: Users,
      title: 'Active Members',
      description: 'Join our community of passionate engineering students.',
      count: '150+'
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Celebrating our milestones and recognition in the field.',
      count: '25'
    },
    {
      icon: BookOpen,
      title: 'Publications',
      description: 'Access research papers and technical publications by our members.',
      count: '40+'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      date: '2025-01-15',
      venue: 'Auditorium A',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'IEEE Student Paper Presentation',
      date: '2025-01-22',
      venue: 'Conference Hall',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Robotics Competition',
      date: '2025-01-28',
      venue: 'Lab Complex',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-white font-bold text-2xl">IEEE</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              IEEE Student
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Branch
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advancing technology for humanity through innovation, collaboration, and excellence in engineering education.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                to="/login"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Join Our Community</span>
                <ArrowRight size={20} />
              </Link>
              
              <button className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/15 transition-all duration-300 flex items-center space-x-2">
                <Play size={20} />
                <span>Watch Introduction</span>
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <GlassCard className="p-8 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.count}</h3>
                    <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Upcoming Events Section */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Don't miss out on our exciting events, workshops, and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <GlassCard className="overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-blue-300 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                    <p className="text-white/70 mb-4">{event.venue}</p>
                    <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300"
            >
              <span>View All Events</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;