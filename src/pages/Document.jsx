import { motion } from 'framer-motion'

export default function Documents() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-white pt-32 px-6 md:px-20"
    >
      <h1 className="text-4xl font-bold text-neutral-900 mb-6">Upload & View Documents</h1>
      <p className="text-neutral-500 mb-8">Manage your academic and technical documents here.</p>
      
      {/* Mini Upload Zone */}
      <div className="border-2 border-dashed border-neutral-200 rounded-3xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
        <p className="text-neutral-600 font-medium">Click to upload or drag and drop files</p>
        <span className="text-xs text-neutral-400 block mt-2">PDF, PNG, JPG up to 10MB</span>
      </div>
    </motion.div>
  )
}