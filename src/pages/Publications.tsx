import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Users, Calendar, ListFilter as Filter } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Publications = () => {
  // Mock publications data - replace with actual Firebase data
  const publications = [
    {
      id: 1,
      title: 'Advances in 5G Network Optimization for Urban Environments',
      authors: ['Dr. Sarah Johnson', 'Alex Rodriguez', 'Emily Chen'],
      abstract: 'This paper presents novel approaches to optimizing 5G network performance in dense urban environments, focusing on interference mitigation and resource allocation strategies.',
      publishDate: '2024-12-15',
      type: 'journal',
      link: 'https://example.com/paper1',
      venue: 'IEEE Transactions on Wireless Communications',
      citations: 23
    },
    {
      id: 2,
      title: 'Machine Learning Applications in Smart Grid Management',
      authors: ['Michael Thompson', 'Dr. Sarah Johnson'],
      abstract: 'An exploration of machine learning techniques for predictive maintenance and load balancing in modern smart grid systems.',
      publishDate: '2024-11-20',
      type: 'conference',
      link: 'https://example.com/paper2',
      venue: 'IEEE Smart Grid Conference 2024',
      citations: 15
    },
    {
      id: 3,
      title: 'Autonomous Robot Navigation Using Computer Vision',
      authors: ['Emily Chen', 'Alex Rodriguez'],
      abstract: 'A comprehensive study on implementing computer vision algorithms for autonomous robot navigation in complex environments.',
      publishDate: '2024-10-10',
      type: 'journal',
      link: 'https://example.com/paper3',
      venue: 'IEEE Robotics and Automation Letters',
      citations: 31
    },
    {
      id: 4,
      title: 'IoT Security Framework for Industrial Applications',
      authors: ['Dr. Sarah Johnson', 'Michael Thompson', 'James Wilson'],
      abstract: 'Development of a comprehensive security framework for Internet of Things devices in industrial settings.',
      publishDate: '2024-09-05',
      type: 'conference',
      link: 'https://example.com/paper4',
      venue: 'IEEE Industrial IoT Workshop 2024',
      citations: 19
    }
  ];

  const publicationTypes = [
    { value: 'all', label: 'All Publications' },
    { value: 'journal', label: 'Journal Articles' },
    { value: 'conference', label: 'Conference Papers' },
    { value: 'workshop', label: 'Workshop Papers' }
  ];

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
              IEEE 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover cutting-edge research and technical publications from our IEEE Student Branch members.
            </p>
            
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-1">
                <Filter size={20} className="text-white/70 ml-3" />
                <select className="bg-transparent text-white pr-4 py-2 focus:outline-none">
                  {publicationTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-800">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Publications Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Publication Icon */}
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <BookOpen size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Publication Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">
                            {publication.title}
                          </h3>
                          <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                            publication.type === 'journal' 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-purple-500/20 text-purple-300'
                          }`}>
                            {publication.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-white/60 text-sm mb-1">Citations</div>
                          <div className="text-2xl font-bold text-green-400">{publication.citations}</div>
                        </div>
                      </div>

                      {/* Authors */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Users size={16} className="text-white/60" />
                        <span className="text-white/80 text-sm">
                          {publication.authors.join(', ')}
                        </span>
                      </div>

                      {/* Publication Details */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-white/70 text-sm">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar size={16} />
                          <span>{new Date(publication.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="font-medium text-blue-300">
                          {publication.venue}
                        </div>
                      </div>

                      {/* Abstract */}
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {publication.abstract}
                      </p>

                      {/* Action Button */}
                      <div className="flex space-x-4">
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
                        >
                          <span>Read Full Paper</span>
                          <ExternalLink size={16} />
                        </a>
                        
                        <button className="px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Publication Statistics
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">40+</div>
                  <div className="text-white/80 font-medium">Total Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">88</div>
                  <div className="text-white/80 font-medium">Total Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">15</div>
                  <div className="text-white/80 font-medium">Active Authors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5</div>
                  <div className="text-white/80 font-medium">Research Areas</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Publications;