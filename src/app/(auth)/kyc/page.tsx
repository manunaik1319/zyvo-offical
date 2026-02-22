'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Shield, Upload, CheckCircle, AlertCircle, Clock, 
  FileText, CreditCard, User, Camera, ChevronRight,
  Eye, X
} from 'lucide-react'

const documentTypes = [
  { id: 'aadhaar', label: 'Aadhaar Card', desc: 'Government issued ID' },
  { id: 'pan', label: 'PAN Card', desc: 'For tax verification' },
  { id: 'passport', label: 'Passport', desc: 'Valid passport' },
  { id: 'driving', label: 'Driving License', desc: 'Valid DL' },
]

const verificationSteps = [
  { id: 1, label: 'Personal Details', icon: User },
  { id: 2, label: 'ID Verification', icon: CreditCard },
  { id: 3, label: 'Selfie Verification', icon: Camera },
  { id: 4, label: 'Review', icon: FileText },
]

export default function KYCVerificationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Personal Details
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    // Step 2 - ID Verification
    documentType: '',
    documentNumber: '',
    documentFront: null as File | null,
    documentBack: null as File | null,
    // Step 3 - Selfie
    selfie: null as File | null,
  })

  const [uploadPreviews, setUploadPreviews] = useState({
    documentFront: '',
    documentBack: '',
    selfie: '',
  })

  const handleFileUpload = (field: 'documentFront' | 'documentBack' | 'selfie', file: File | null) => {
    if (file) {
      setFormData({ ...formData, [field]: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadPreviews({ ...uploadPreviews, [field]: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeFile = (field: 'documentFront' | 'documentBack' | 'selfie') => {
    setFormData({ ...formData, [field]: null })
    setUploadPreviews({ ...uploadPreviews, [field]: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      console.log('KYC submission:', formData)
      setStep(5)
    }
  }

  if (step === 5) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Verification In Progress</h1>
            <p className="text-dark-600 mb-6">
              Your documents have been submitted for verification. This usually takes 24-48 hours.
            </p>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Verification ID</span>
                <span className="font-mono font-semibold text-dark-900">#KYC2024001</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Status</span>
                <span className="text-amber-600 font-medium">Under Review</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-500">Submitted</span>
                <span className="font-semibold text-dark-900">Dec 28, 2024</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm text-blue-800">
                <strong>What&apos;s next?</strong> We&apos;ll notify you via email and SMS once your verification is complete.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-dark-900">Zyvo</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-dark-500">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Secure Verification</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-dark-900 mb-2">Identity Verification</h1>
          <p className="text-dark-500">Complete KYC to unlock all features</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
          {verificationSteps.map((s, idx) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step > s.id ? 'bg-green-500 text-white' :
                  step === s.id ? 'bg-primary-600 text-white' : 'bg-dark-200 text-dark-500'
                }`}>
                  {step > s.id ? <CheckCircle className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className={`text-xs mt-2 whitespace-nowrap ${step === s.id ? 'text-primary-600 font-medium' : 'text-dark-400'}`}>
                  {s.label}
                </span>
              </div>
              {idx < verificationSteps.length - 1 && (
                <div className={`w-12 md:w-20 h-0.5 mx-2 ${step > s.id ? 'bg-green-500' : 'bg-dark-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-green-800">Your data is secure</p>
              <p className="text-sm text-green-700">
                All documents are encrypted and stored securely. We comply with data protection regulations.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Personal Details */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-lg font-semibold text-dark-900">Personal Details</h2>
              <p className="text-sm text-dark-500">Enter your details as per your ID document</p>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Name (as per ID) *</label>
                <input
                  type="text"
                  placeholder="Enter your full legal name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Address *</label>
                <textarea
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">City *</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">State *</label>
                  <input
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2 - ID Verification */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-lg font-semibold text-dark-900">ID Document Verification</h2>
              <p className="text-sm text-dark-500">Upload a clear photo of your government-issued ID</p>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Select Document Type *</label>
                <div className="grid grid-cols-2 gap-3">
                  {documentTypes.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, documentType: doc.id })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors ${
                        formData.documentType === doc.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <span className="font-medium text-dark-900">{doc.label}</span>
                      <p className="text-xs text-dark-500 mt-1">{doc.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Document Number *</label>
                <input
                  type="text"
                  placeholder="Enter document number"
                  value={formData.documentNumber}
                  onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Front Side *</label>
                  {uploadPreviews.documentFront ? (
                    <div className="relative rounded-xl overflow-hidden border border-dark-200">
                      <img src={uploadPreviews.documentFront} alt="Document front" className="w-full h-32 object-cover" />
                      <div className="absolute top-2 right-2 flex gap-1">
                        <button
                          type="button"
                          className="p-1.5 bg-white rounded-lg shadow-sm hover:bg-dark-50"
                        >
                          <Eye className="w-4 h-4 text-dark-600" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFile('documentFront')}
                          className="p-1.5 bg-white rounded-lg shadow-sm hover:bg-red-50"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="block border-2 border-dashed border-dark-200 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-dark-400 mx-auto mb-2" />
                      <p className="text-sm text-dark-600">Click to upload</p>
                      <p className="text-xs text-dark-400 mt-1">JPG, PNG up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload('documentFront', e.target.files?.[0] || null)}
                      />
                    </label>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Back Side *</label>
                  {uploadPreviews.documentBack ? (
                    <div className="relative rounded-xl overflow-hidden border border-dark-200">
                      <img src={uploadPreviews.documentBack} alt="Document back" className="w-full h-32 object-cover" />
                      <div className="absolute top-2 right-2 flex gap-1">
                        <button
                          type="button"
                          className="p-1.5 bg-white rounded-lg shadow-sm hover:bg-dark-50"
                        >
                          <Eye className="w-4 h-4 text-dark-600" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFile('documentBack')}
                          className="p-1.5 bg-white rounded-lg shadow-sm hover:bg-red-50"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="block border-2 border-dashed border-dark-200 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-dark-400 mx-auto mb-2" />
                      <p className="text-sm text-dark-600">Click to upload</p>
                      <p className="text-xs text-dark-400 mt-1">JPG, PNG up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload('documentBack', e.target.files?.[0] || null)}
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium">Tips for a successful upload:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Ensure all corners of the document are visible</li>
                      <li>Avoid glare and shadows</li>
                      <li>Make sure text is clearly readable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Selfie Verification */}
          {step === 3 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-lg font-semibold text-dark-900">Selfie Verification</h2>
              <p className="text-sm text-dark-500">Take a clear selfie to verify your identity</p>

              <div className="flex flex-col items-center">
                {uploadPreviews.selfie ? (
                  <div className="relative">
                    <img 
                      src={uploadPreviews.selfie} 
                      alt="Selfie" 
                      className="w-48 h-48 rounded-full object-cover border-4 border-primary-200" 
                    />
                    <button
                      type="button"
                      onClick={() => removeFile('selfie')}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50"
                    >
                      <X className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                ) : (
                  <label className="w-48 h-48 rounded-full border-4 border-dashed border-dark-200 flex flex-col items-center justify-center cursor-pointer hover:border-primary-400 transition-colors">
                    <Camera className="w-12 h-12 text-dark-400 mb-2" />
                    <span className="text-sm text-dark-600">Take Selfie</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="user"
                      className="hidden"
                      onChange={(e) => handleFileUpload('selfie', e.target.files?.[0] || null)}
                    />
                  </label>
                )}
              </div>

              <div className="bg-cream-100 rounded-xl p-4">
                <h3 className="font-medium text-dark-900 mb-2">Selfie Guidelines</h3>
                <ul className="space-y-2 text-sm text-dark-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Face the camera directly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ensure good lighting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Remove glasses and hats
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Keep a neutral expression
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Review */}
          {step === 4 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-lg font-semibold text-dark-900">Review Your Information</h2>
              <p className="text-sm text-dark-500">Please verify all details before submitting</p>

              {/* Personal Details Summary */}
              <div className="border border-dark-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-dark-900">Personal Details</h3>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-dark-500">Full Name</span>
                    <p className="font-medium text-dark-900">{formData.fullName || '-'}</p>
                  </div>
                  <div>
                    <span className="text-dark-500">Date of Birth</span>
                    <p className="font-medium text-dark-900">{formData.dateOfBirth || '-'}</p>
                  </div>
                  <div>
                    <span className="text-dark-500">Gender</span>
                    <p className="font-medium text-dark-900 capitalize">{formData.gender || '-'}</p>
                  </div>
                  <div>
                    <span className="text-dark-500">City</span>
                    <p className="font-medium text-dark-900">{formData.city || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Document Summary */}
              <div className="border border-dark-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-dark-900">ID Document</h3>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-dark-500">Document Type</span>
                    <p className="font-medium text-dark-900 capitalize">
                      {documentTypes.find(d => d.id === formData.documentType)?.label || '-'}
                    </p>
                  </div>
                  <div>
                    <span className="text-dark-500">Document Number</span>
                    <p className="font-medium text-dark-900">{formData.documentNumber || '-'}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-3">
                  {uploadPreviews.documentFront && (
                    <img src={uploadPreviews.documentFront} alt="Front" className="w-20 h-14 object-cover rounded-lg border" />
                  )}
                  {uploadPreviews.documentBack && (
                    <img src={uploadPreviews.documentBack} alt="Back" className="w-20 h-14 object-cover rounded-lg border" />
                  )}
                </div>
              </div>

              {/* Selfie Summary */}
              <div className="border border-dark-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-dark-900">Selfie</h3>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                {uploadPreviews.selfie ? (
                  <img src={uploadPreviews.selfie} alt="Selfie" className="w-16 h-16 object-cover rounded-full border-2 border-dark-200" />
                ) : (
                  <p className="text-sm text-dark-500">No selfie uploaded</p>
                )}
              </div>

              {/* Consent */}
              <div className="bg-cream-100 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                    required
                  />
                  <span className="text-sm text-dark-600">
                    I confirm that all the information provided is accurate and I consent to Zyvo verifying my identity using the documents submitted. I have read and agree to the{' '}
                    <Link href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Submit for Verification
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Help */}
        <div className="mt-6 text-center">
          <p className="text-sm text-dark-500">
            Having trouble?{' '}
            <Link href="/contact" className="text-primary-600 font-medium hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
