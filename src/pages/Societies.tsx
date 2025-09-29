import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Calendar, Activity, ExternalLink } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Societies = () => {
  // Mock societies data - replace with actual Firebase data
  const societies = [
    {
      id: 1,
      name: 'Computer Society (ComSoc)',
      description: 'Advancing the theory, design, and application of computer and information processing technology.',
      coordinator: 'Dr. Michael Chen',
      coordinatorEmail: 'michael.chen@university.edu',
      logoURL: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 85,
      activities: [
        'Programming Workshops',
        'Algorithm Competitions',
        'Software Development Projects',
        'Tech Talk Series',
        'Hackathons'
      ],
      upcomingEvents: [
        { title: 'Python Machine Learning Workshop', date: '2025-01-18' },
        { title: 'Algorithm Challenge', date: '2025-01-25' }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Communications Society (CS)',
      description: 'Focused on advancing the science and technology of communications and networking.',
      coordinator: 'Prof. Sarah Wilson',
      coordinatorEmail: 'sarah.wilson@university.edu',
      logoURL: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 62,
      activities: [
        '5G Technology Seminars',
        'Network Security Workshops',
        'IoT Projects',
        'Wireless Communication Labs',
        'Industry Partnerships'
      ],
      upcomingEvents: [
        { title: '5G Implementation Seminar', date: '2025-01-20' },
        { title: 'Network Security Workshop', date: '2025-01-30' }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'SIGHT (Special Interest Group on Humanitarian Technology)',
      description: 'Leveraging technology for humanitarian purposes and sustainable development.',
      coordinator: 'Dr. Emily Rodriguez',
      coordinatorEmail: 'emily.rodriguez@university.edu',
      logoURL: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 45,
      activities: [
        'Community Service Projects',
        'Sustainable Technology Development',
        'Educational Outreach',
        'Disaster Response Solutions',
        'Social Impact Initiatives'
      ],
      upcomingEvents: [
        { title: 'Community Tech Workshop', date: '2025-01-22' },
        { title: 'Sustainability Hackathon', date: '2025-02-05' }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'Women in Engineering (WIE)',
      description: 'Promoting women engineers and scientists, and inspiring girls to follow their academic interests in engineering.',
      coordinator: 'Dr. Jennifer Park',
      coordinatorEmail: 'jennifer.park@university.edu',
      logoURL: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      members: 78,
      activities: [
        'Mentorship Programs',
        'Leadership Workshops',
        'Networking Events',
        'STEM Outreach',
        'Professional Development'
      ],
      upcomingEvents: [
        { title: 'Women in Tech Panel', date: '2025-01-24' },
        { title: 'Leadership Skills Workshop', date: '2025-02-01' }
      ],
      color: 'from-pink-500 to-pink-600'
    }
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
                Societies
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our specialized societies and special interest groups, each focused on advancing specific areas of engineering and technology.
            </p>
          </motion.div>

          {/* Societies Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {societies.map((society, index) => (
              <motion.div
                key={society.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="p-8 h-full">
                  {/* Society Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${society.color} rounded-2xl flex items-center justify-center`}>
                      <img 
                        src={society.logoURL} 
                        alt={society.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{society.name}</h3>
                      <div className="flex items-center space-x-2 text-white/70">
                        <Users size={16} />
                        <span>{society.members} members</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {society.description}
                  </p>

                  {/* Coordinator */}
                  <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-white/70 text-sm mb-1">Society Coordinator</div>
                    <div className="text-white font-medium">{society.coordinator}</div>
                    <div className="flex items-center space-x-2 text-blue-300 text-sm mt-1">
                      <Mail size={14} />
                      <a href={`mailto:${society.coordinatorEmail}`} className="hover:text-blue-200 transition-colors duration-200">
                        {society.coordinatorEmail}
                      </a>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                      <Activity size={18} />
                      <span>Key Activities</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {society.activities.map((activity, actIndex) => (
                        <div 
                          key={actIndex}
                          className="flex items-center space-x-2 text-white/70 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                      <Calendar size={18} />
                      <span>Upcoming Events</span>
                    </h4>
                    <div className="space-y-2">
                      {society.upcomingEvents.map((event, eventIndex) => (
                        <div 
                          key={eventIndex}
                          className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="text-white text-sm">{event.title}</div>
                          <div className="text-blue-300 text-xs">
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Join Society Button */}
                  <button className={`w-full py-3 bg-gradient-to-r ${society.color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Join {society.name.split(' ')[0]} Society</span>
                    <ExternalLink size={16} />
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Society Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Society Membership Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Networking</h3>
                  <p className="text-white/70 text-sm">Connect with professionals and peers in your field of interest.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Activity size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Learning</h3>
                  <p className="text-white/70 text-sm">Access specialized workshops and educational resources.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Events</h3>
                  <p className="text-white/70 text-sm">Participate in exclusive society events and competitions.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Opportunities</h3>
                  <p className="text-white/70 text-sm">Access to internships, research, and career opportunities.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Societies;