import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Plus, ListFilter as Filter } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/common/GlassCard';
import AnimatedBackground from '../components/common/AnimatedBackground';

const Events = () => {
  const { currentUser } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterType, setFilterType] = useState('all');

  // Mock events data - replace with actual Firebase data
  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      description: 'Dive deep into the fundamentals of artificial intelligence and machine learning with hands-on projects and real-world applications.',
      date: '2025-01-15',
      time: '10:00 AM - 4:00 PM',
      venue: 'Auditorium A, Engineering Building',
      photoURL: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 120,
      maxAttendees: 150,
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'IEEE Student Paper Presentation',
      description: 'Annual student paper presentation competition showcasing innovative research projects from our members.',
      date: '2025-01-22',
      time: '2:00 PM - 6:00 PM',
      venue: 'Conference Hall, Student Center',
      photoURL: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 85,
      maxAttendees: 100,
      type: 'competition',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Robotics Competition',
      description: 'Build, program, and compete with autonomous robots in various challenges designed to test engineering skills.',
      date: '2025-01-28',
      time: '9:00 AM - 5:00 PM',
      venue: 'Robotics Lab, Engineering Complex',
      photoURL: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 45,
      maxAttendees: 60,
      type: 'competition',
      status: 'upcoming'
    },
    {
      id: 4,
      title: '5G Technology Seminar',
      description: 'Expert speakers from industry discussing the latest developments in 5G technology and its impact on society.',
      date: '2024-12-10',
      time: '3:00 PM - 5:00 PM',
      venue: 'Main Auditorium',
      photoURL: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: 200,
      maxAttendees: 200,
      type: 'seminar',
      status: 'completed'
    }
  ];

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'seminar', label: 'Seminars' },
    { value: 'competition', label: 'Competitions' },
    { value: 'networking', label: 'Networking' }
  ];

  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(event => event.type === filterType);

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
                Events
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover workshops, seminars, and competitions designed to advance your engineering knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {currentUser?.role === 'admin' && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
                >
                  <Plus size={20} />
                  <span>Add Event</span>
                </button>
              )}
              
              <div className="flex items-center space-x-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-1">
                <Filter size={20} className="text-white/70 ml-3" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-transparent text-white pr-4 py-2 focus:outline-none"
                >
                  {eventTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-800">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={event.photoURL} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-white flex-1">
                        {event.title}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${
                        event.status === 'upcoming' 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {event.status}
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-6 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-white/80">
                        <Calendar size={18} className="text-blue-400" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-white/80">
                        <Clock size={18} className="text-purple-400" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-white/80">
                        <MapPin size={18} className="text-green-400" />
                        <span>{event.venue}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-white/80">
                        <Users size={18} className="text-yellow-400" />
                        <span>{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-white/70 mb-2">
                        <span>Registration Progress</span>
                        <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                        {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                      </button>
                      <button className="px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/15 transition-all duration-300">
                        Share
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Add Event Modal */}
          {showAddForm && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Add New Event</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Event Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Enter event title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                        placeholder="Enter event description"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Time
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                          placeholder="e.g., 10:00 AM - 4:00 PM"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Venue
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Enter venue location"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Event Type
                        </label>
                        <select className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300">
                          <option value="" className="bg-gray-800">Select type</option>
                          <option value="workshop" className="bg-gray-800">Workshop</option>
                          <option value="seminar" className="bg-gray-800">Seminar</option>
                          <option value="competition" className="bg-gray-800">Competition</option>
                          <option value="networking" className="bg-gray-800">Networking</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Max Attendees
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                          placeholder="e.g., 100"
                        />
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
                      Create Event
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

export default Events;