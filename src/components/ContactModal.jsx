import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, Terminal, Mail } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 1800);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/20 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10"
          >
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 bg-[#141414] border-b border-[#262626] px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  TRANSMIT MESSAGE // SEC_CHANNEL
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-[#8c8c8c] hover:text-white hover:bg-[#222] rounded transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-4 font-mono">
              <div className="space-y-1">
                <label className="text-[11px] text-[#8c8c8c] uppercase tracking-wider">
                  NAME / IDENTIFIER
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-[#050505] border border-[#262626] focus:border-white px-3 py-2 text-xs text-white outline-none transition rounded-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[#8c8c8c] uppercase tracking-wider">
                  RETURN ADDRESS (EMAIL)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#050505] border border-[#262626] focus:border-white px-3 py-2 text-xs text-white outline-none transition rounded-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[#8c8c8c] uppercase tracking-wider">
                  PAYLOAD (MESSAGE)
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe project details, engineering requirements, or opportunity..."
                  className="w-full bg-[#050505] border border-[#262626] focus:border-white px-3 py-2 text-xs text-white outline-none transition rounded-xs resize-none"
                />
              </div>

              {/* Direct email reminder */}
              <div className="text-[10px] text-[#777] flex items-center justify-between pt-1">
                <span>RECIPIENT: rohit2212kr@gmail.com</span>
                <span>ENC: AES-256</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="flex-1 brutalist-btn"
                >
                  {status === 'idle' && (
                    <>
                      <span>DISPATCH PAYLOAD</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <span className="animate-spin inline-block w-3 h-3 border-2 border-black border-t-transparent rounded-full" />
                      <span>TRANSMITTING...</span>
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>TRANSMITTED</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="brutalist-btn-secondary px-4"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
