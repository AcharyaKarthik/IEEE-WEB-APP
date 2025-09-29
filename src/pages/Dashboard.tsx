import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, BookOpen, Bell, Plus, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Dashboard = () => {
  const { currentUser } = useAuth();

  const quickActions = [
    { icon: Calendar, title: 'View Events', description: 'Browse upcoming events and workshops', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Team Directory', description: 'Connect with other IEEE members', color: 'from-purple-500 to-purple-600' },
    { icon: BookOpen, title: 'Publications', description: 'Access latest research papers', color: 'from-green-500 to-green-600' },
    { icon: Trophy, title: 'Achievements', description: 'View branch accomplishments', color: 'from-yellow-500 to-yellow-600' }
  ];

  const adminActions = [
    { icon: Plus, title: 'Add Event', description: 'Create new events and workshops', color: 'from-red-500 to-red-600' },
    { icon: Users, title: 'Manage Team', description: 'Add or update team members', color: 'from-indigo-500 to-indigo-600' },
    { icon: Settings, title: 'Branch Settings', description: 'Configure branch preferences', color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Users size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Welcome back, {currentUser?.name}!
                  </h1>
                  <p className="text-white/70 text-lg">
                    Member ID: {currentUser?.memberID} • Role: {currentUser?.role}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">5</div>
                  <div className="text-white/70 text-sm">Upcoming Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-white/70 text-sm">Notifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">8</div>
                  <div className="text-white/70 text-sm">New Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">3</div>
                  <div className="text-white/70 text-sm">Recent Achievements</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <GlassCard className="p-6 cursor-pointer">
                      <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                      <p className="text-white/70 text-sm">{action.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Admin Actions */}
          {currentUser?.role === 'admin' && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Admin Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {adminActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.div
                      key={action.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <GlassCard className="p-6 cursor-pointer">
                        <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                        <p className="text-white/70 text-sm">{action.description}</p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Recent Activity</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {[
                    { title: 'AI Workshop', date: 'Jan 15, 2025', time: '10:00 AM' },
                    { title: 'Paper Presentation', date: 'Jan 22, 2025', time: '2:00 PM' },
                    { title: 'Robotics Competition', date: 'Jan 28, 2025', time: '9:00 AM' }
                  ].map((event, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <div className="text-white font-medium">{event.title}</div>
                        <div className="text-white/60 text-sm">{event.date} • {event.time}</div>
                      </div>
                      <Calendar size={18} className="text-blue-400" />
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Notifications</h3>
                <div className="space-y-4">
                  {[
                    { message: 'New publication added: "5G Networks"', time: '2 hours ago' },
                    { message: 'Team meeting scheduled for Friday', time: '1 day ago' },
                    { message: 'Achievement unlocked: Best Branch Award', time: '3 days ago' }
                  ].map((notification, index) => (
                    <div key={index} className="flex justify-between items-start p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex-1">
                        <div className="text-white text-sm">{notification.message}</div>
                        <div className="text-white/60 text-xs mt-1">{notification.time}</div>
                      </div>
                      <Bell size={16} className="text-purple-400 mt-1" />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;