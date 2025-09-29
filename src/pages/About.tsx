import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Globe, Award, Lightbulb } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Fostering creative thinking and technological advancement in engineering solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong networks and partnerships to achieve common goals together.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contributing to worldwide technological progress and sustainable development.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in education, research, and professional development.'
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Promoting continuous education and knowledge sharing among members.'
    },
    {
      icon: Eye,
      title: 'Leadership',
      description: 'Developing future leaders who will shape the technology landscape.'
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
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IEEE
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The Institute of Electrical and Electronics Engineers - advancing technology for humanity through innovation, collaboration, and excellence.
            </motion.p>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                To foster technological innovation and excellence for the benefit of humanity. We strive to advance the theory and application of electrical, electronics, communications and computer technologies, while promoting the professional development of our members through educational activities, conferences, and publications.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                To be recognized as the leading organization that inspires a global community of innovators. We envision a world where technological advancement improves the quality of life for all people, driven by ethical engineering practices and collaborative research initiatives.
              </p>
            </GlassCard>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The principles that guide our mission and shape our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GlassCard className="p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                By the Numbers
              </h2>
              <p className="text-xl text-white/80">
                Our impact in the engineering and technology community.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-white/80 font-medium">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">25</div>
                <div className="text-white/80 font-medium">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">40+</div>
                <div className="text-white/80 font-medium">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-white/80 font-medium">Annual Events</div>
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </div>
  );
};

export default About;