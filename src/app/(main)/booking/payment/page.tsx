'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ChevronRight, CreditCard, Smartphone, Building2, Wallet,
  Lock, Shield, CheckCircle, ArrowRight, MessageCircle, Phone,
  HelpCircle, Tag, Edit2, Clock
} from 'lucide-react'

const paymentMethods = [
  { 
    id: 'upi', 
    name: 'UPI', 
    description: 'Google Pay, PhonePe, Paytm',
    icon: Smartphone 
  },
  { 
    id: 'card', 
    name: 'Credit / Debit Card', 
    description: 'Visa, Mastercard, RuPay',
    icon: CreditCard 
  },
  { 
    id: 'netbanking', 
    name: 'Net Banking', 
    description: 'All major banks supported',
    icon: Building2 
  },
  { 
    id: 'wallet', 
    name: 'Wallet', 
    description: 'Paytm, Amazon Pay',
    icon: Wallet 
  },
]

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  })
  const [couponCode, setCouponCode] = useState('')
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  // Mock booking data
  const bookingData = {
    spaceName: 'Central Study Hub',
    seatType: 'Seat A5',
    zone: 'Quiet Zone',
    passType: '1 Full Day Pass',
    image: '/images/study-spaces/space-1.jpg',
    originalPrice: 120,
    discount: 20,
    subtotal: 100,
    taxesAndFees: 18,
    totalAmount: 118,
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(' ') : value
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + ' / ' + v.substring(2, 4)
    }
    return v
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirect to success page
    window.location.href = '/booking/success'
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white border-b border-dark-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-dark-900">Zyvo</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-dark-600">
              <span>Hello, Alex</span>
              <div className="w-8 h-8 bg-dark-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-dark-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/explore" className="hover:text-primary-600">Study Spaces</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/booking/study-hall" className="hover:text-primary-600">Booking</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-dark-900 font-medium">Payment</span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-900 mb-2">Complete Your Booking</h1>
          <p className="text-dark-500">Securely finalize your study space reservation</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Choose Your Payment Method</h2>
              
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      selectedMethod === method.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-dark-200 hover:border-dark-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedMethod === method.id ? 'bg-primary-100' : 'bg-dark-100'
                    }`}>
                      <method.icon className={`w-5 h-5 ${
                        selectedMethod === method.id ? 'text-primary-600' : 'text-dark-500'
                      }`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-dark-900">{method.name}</p>
                      <p className="text-sm text-dark-500">{method.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedMethod === method.id
                        ? 'border-primary-600 bg-primary-600'
                        : 'border-dark-300'
                    }`}>
                      {selectedMethod === method.id && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Details Form */}
            {selectedMethod === 'card' && (
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-dark-900">Enter Card Details</h2>
                  <div className="flex items-center gap-2">
                    <Image src="/images/icons/visa.svg" alt="Visa" width={32} height={20} className="h-5 w-auto" />
                    <Image src="/images/icons/mastercard.svg" alt="Mastercard" width={32} height={20} className="h-5 w-auto" />
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({ 
                          ...cardDetails, 
                          cardNumber: formatCardNumber(e.target.value) 
                        })}
                        maxLength={19}
                        className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Enter name as on card"
                      value={cardDetails.cardholderName}
                      onChange={(e) => setCardDetails({ ...cardDetails, cardholderName: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) => setCardDetails({ 
                          ...cardDetails, 
                          expiryDate: formatExpiryDate(e.target.value) 
                        })}
                        maxLength={7}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        CVV
                        <HelpCircle className="w-4 h-4 text-dark-400 inline ml-1" />
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        maxLength={4}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900"
                        required
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cardDetails.saveCard}
                      onChange={(e) => setCardDetails({ ...cardDetails, saveCard: e.target.checked })}
                      className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-dark-600">Save card securely for future payments</span>
                  </label>

                  {/* Security Badges */}
                  <div className="flex items-center gap-6 pt-4 border-t border-dark-100">
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <Lock className="w-4 h-4 text-dark-400" />
                      <span>256-bit SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>PCI-DSS Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-500">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      <span>Buyer Protection</span>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* UPI Form */}
            {selectedMethod === 'upi' && (
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="text-lg font-semibold text-dark-900 mb-4">Enter UPI ID</h2>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">UPI ID</label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900"
                  />
                  <p className="text-xs text-dark-400 mt-2">Example: 9876543210@paytm, yourname@okicici</p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-sm text-dark-500">Or pay using:</span>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-dark-200 rounded-lg text-sm hover:bg-dark-50">Google Pay</button>
                    <button className="px-4 py-2 border border-dark-200 rounded-lg text-sm hover:bg-dark-50">PhonePe</button>
                    <button className="px-4 py-2 border border-dark-200 rounded-lg text-sm hover:bg-dark-50">Paytm</button>
                  </div>
                </div>
              </div>
            )}

            {/* Net Banking Form */}
            {selectedMethod === 'netbanking' && (
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="text-lg font-semibold text-dark-900 mb-4">Select Your Bank</h2>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {['HDFC', 'ICICI', 'SBI', 'Axis', 'Kotak', 'Yes Bank', 'PNB', 'BOB'].map((bank) => (
                    <button
                      key={bank}
                      className="p-3 border border-dark-200 rounded-xl text-sm font-medium text-dark-700 hover:border-primary-500 hover:bg-primary-50 transition-colors"
                    >
                      {bank}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Or select from list</label>
                  <select className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-900">
                    <option value="">Choose your bank</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="axis">Axis Bank</option>
                  </select>
                </div>
              </div>
            )}

            {/* Wallet Form */}
            {selectedMethod === 'wallet' && (
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="text-lg font-semibold text-dark-900 mb-4">Select Wallet</h2>
                <div className="space-y-3">
                  {['Paytm Wallet', 'Amazon Pay', 'Mobikwik', 'Freecharge'].map((wallet) => (
                    <button
                      key={wallet}
                      className="w-full flex items-center gap-4 p-4 border border-dark-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-dark-100 rounded-lg"></div>
                      <span className="font-medium text-dark-900">{wallet}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="text-sm text-dark-600">
                By clicking &quot;Pay Now&quot;, you agree to Zyvo&apos;s{' '}
                <Link href="/legal/terms" className="text-primary-600 hover:underline">Booking Policy</Link>
                {' '}and{' '}
                <Link href="/legal/terms" className="text-primary-600 hover:underline">Terms of Service</Link>.
              </label>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={!agreedToTerms || isProcessing}
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  Pay ₹{bookingData.totalAmount}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-dark-400">
              Your payment details are safe and encrypted.
            </p>

            {/* Help Section */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Need Help with Payment?</h3>
                  <p className="text-sm text-dark-500">Our support team is available 24/7 to assist you.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-medium hover:bg-primary-100 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Live Chat
                  </button>
                  <a href="tel:1800-123-4567" className="flex items-center gap-2 px-4 py-2 text-dark-600 hover:text-dark-900">
                    <Phone className="w-4 h-4" />
                    1800-123-4567
                  </a>
                  <Link href="/tuitions/faq" className="text-primary-600 text-sm font-medium hover:underline">
                    Visit FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Your Booking Summary</h2>
              
              {/* Space Info */}
              <div className="flex gap-4 pb-4 border-b border-dark-100">
                <div className="w-20 h-20 bg-dark-200 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-dark-900">{bookingData.spaceName}</h3>
                  <p className="text-sm text-dark-500">{bookingData.seatType} • {bookingData.zone}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {bookingData.passType}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 py-3 text-xs text-dark-400 border-b border-dark-100">
                <Clock className="w-3 h-3" />
                <span>Last updated: Just now</span>
              </div>

              {/* Price Breakdown */}
              <div className="py-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-600">Original Price</span>
                  <span className="text-dark-900">₹{bookingData.originalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 flex items-center gap-1">
                    Discount
                    <Tag className="w-3 h-3" />
                  </span>
                  <span className="text-green-600">- ₹{bookingData.discount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-600">Subtotal</span>
                  <span className="text-dark-900">₹{bookingData.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dark-600">Taxes & Fees</span>
                  <span className="text-dark-900">₹{bookingData.taxesAndFees}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4 border-t border-dark-100">
                <span className="font-semibold text-dark-900">Total Amount Due</span>
                <span className="text-2xl font-bold text-primary-600">₹{bookingData.totalAmount}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                <Link 
                  href="/booking/study-hall" 
                  className="text-sm text-dark-600 hover:text-primary-600 flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Booking
                </Link>
                {showCouponInput ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-24 px-2 py-1 text-sm border border-dark-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                    <button className="text-sm text-primary-600 font-medium">Apply</button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowCouponInput(true)}
                    className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1"
                  >
                    <Tag className="w-4 h-4" />
                    Add Coupon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
