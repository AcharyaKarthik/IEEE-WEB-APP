import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Calendar, Camera, Upload, Plus, CreditCard as Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Team = () => {
  const { currentUser } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // Mock team data - replace with actual Firebase data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Faculty Advisor',
      email: 'sarah.johnson@university.edu',
      photoURL: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      joinDate: '2020-01-15',
      isActive: true
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      position: 'Student Branch Chair',
      email: 'alex.r@student.edu',
      photoURL: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      joinDate: '2023-08-20',
      isActive: true
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Vice Chair',
      email: 'emily.chen@student.edu',
      photoURL: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      joinDate: '2023-09-01',
      isActive: true
    },
    {
      id: 4,
      name: 'Michael Thompson',
      position: 'Secretary',
      email: 'michael.t@student.edu',
      photoURL: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      joinDate: '2023-09-15',
      isActive: true
    }
  ];

  const positions = [
    'Faculty Advisor',
    'Student Branch Chair',
    'Vice Chair',
    'Secretary',
    'Treasurer',
    'Event Coordinator',
    'Technical Lead',
    'Marketing Lead',
    'Member'
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
              Our 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Meet the dedicated individuals who drive our IEEE Student Branch forward.
            </p>
            
            {currentUser?.role === 'admin' && (
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
              >
                <Plus size={20} />
                <span>Add Team Member</span>
              </button>
            )}
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="p-6 text-center relative group">
                  {currentUser?.role === 'admin' && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedMember(member)}
                          className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
                        >
                          <Edit size={16} className="text-blue-400" />
                        </button>
                        <button
                          className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors duration-200"
                        >
                          <Trash2 size={16} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-white/20">
                      <img 
                        src={member.photoURL} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-3">{member.position}</p>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3 text-white/70">
                      <Mail size={16} />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70">
                      <Calendar size={16} />
                      <span className="text-sm">
                        Joined {new Date(member.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      member.isActive 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-gray-500/20 text-gray-300'
                    }`}>
                      {member.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Add Member Modal */}
          {showAddForm && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Add Team Member</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Photo Upload Section */}
                    <div className="space-y-4">
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Profile Photo
                      </label>
                      <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center">
                        <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users size={32} className="text-white/50" />
                        </div>
                        <p className="text-white/70 mb-4">Upload photo or use camera</p>
                        <div className="flex space-x-4 justify-center">
                          <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                            <Upload size={16} />
                            <span>Upload</span>
                          </button>
                          <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                            <Camera size={16} />
                            <span>Camera</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                          placeholder="Enter full name"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Position
                        </label>
                        <select className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300">
                          <option value="">Select position</option>
                          {positions.map((position) => (
                            <option key={position} value={position} className="bg-gray-800">
                              {position}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                          placeholder="Enter email address"
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="isActive"
                          className="w-5 h-5 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400 focus:ring-offset-0"
                          defaultChecked
                        />
                        <label htmlFor="isActive" className="text-white/80 text-sm font-medium">
                          Active member
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
                      Add Member
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;