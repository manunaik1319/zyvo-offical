'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, RefreshCw } from 'lucide-react'

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isVerified, setIsVerified] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendTimer])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char
    })
    setOtp(newOtp)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join('')
    if (otpValue.length === 6) {
      setIsVerified(true)
    }
  }

  const handleResend = () => {
    setResendTimer(30)
    setOtp(['', '', '', '', '', ''])
  }

  if (isVerified) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-dark-900 mb-2">Verified Successfully!</h1>
          <p className="text-dark-500 mb-8">Your phone number has been verified.</p>
          <Link
            href="/login"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            Continue to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <span className="text-2xl font-bold text-dark-900">Zyvo</span>
        </Link>

        <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
          <Link href="/signup" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <h1 className="text-2xl font-bold text-dark-900 mb-2">Verify your phone</h1>
          <p className="text-dark-500 mb-8">
            We sent a 6-digit code to <span className="font-medium text-dark-900">+91 98765 43210</span>
          </p>

          <form onSubmit={handleSubmit}>
            {/* OTP Inputs */}
            <div className="flex gap-3 justify-center mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-xl font-bold border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={otp.join('').length !== 6}
              className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
            >
              Verify OTP
            </button>
          </form>

          <div className="text-center mt-6">
            {resendTimer > 0 ? (
              <p className="text-sm text-dark-500">
                Resend code in <span className="font-medium text-dark-900">{resendTimer}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:underline"
              >
                <RefreshCw className="w-4 h-4" />
                Resend OTP
              </button>
            )}
          </div>

          <div className="mt-8 p-4 bg-cream-100 rounded-xl">
            <p className="text-xs text-dark-500 text-center">
              By verifying, you confirm that you have access to this phone number and agree to receive SMS notifications from Zyvo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
