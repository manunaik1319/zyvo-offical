# Zyvo - Study Space & Tutor Booking Platform

<p align="center">
  <img src="/public/images/logos/zyvo-logo.png" alt="Zyvo Logo" width="120" />
</p>

<p align="center">
  <strong>Find your perfect study space. Focus better, achieve more.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#pages">Pages</a>
</p>

---

## 🎯 About Zyvo

Zyvo is a modern platform that connects students with study halls, libraries, co-working spaces, and home tutors. Built for the Indian education market, Zyvo helps students find the perfect environment to focus and learn.

**Founded by:** Manohar Bhukya

## ✨ Features

### For Students
- 🔍 **Discover Study Spaces** - Browse 500+ study halls, libraries, cafes, and co-working spaces
- 🗺️ **Map View** - Find spaces near you with interactive maps
- 📅 **Easy Booking** - Book seats with just a few clicks
- 📱 **QR Code Entry** - Seamless check-in with digital passes
- ⭐ **Reviews & Ratings** - Read authentic student reviews
- 👨‍🏫 **Find Tutors** - Connect with verified home tutors

### For Partners
- 🏢 **List Your Space** - Register your study hall on Zyvo
- 📊 **Dashboard** - Manage bookings and track revenue
- 💳 **Secure Payments** - Get paid directly to your bank

### For Tutors
- 📝 **Create Profile** - Showcase your expertise
- 📆 **Manage Schedule** - Set your availability
- 💰 **Earn More** - Connect with students in your area

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter (Google Fonts)

## 🎨 Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Olive Green) | `#4a6b4a` | Buttons, links, accents |
| Secondary (Golden Yellow) | `#facc15` | Highlights, CTAs |
| Accent (Orange) | `#f97316` | Alerts, badges |
| Dark (Warm Gray) | `#1c1917` | Text, backgrounds |
| Cream | `#fdf9f3` | Page backgrounds |

### Typography
- **Font Family:** Inter
- **Headings:** Bold (700)
- **Body:** Regular (400), Medium (500)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zyvo/zyvo-website.git

# Navigate to project directory
cd zyvo-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Geolocation API
NEXT_PUBLIC_GEO_API_KEY=your_api_key_here

# Add other environment variables as needed
```

## 📁 Project Structure

```
zyvo-website/
├── public/
│   └── images/
│       ├── hero/
│       ├── icons/
│       ├── logos/
│       └── study-spaces/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Authentication pages
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   ├── verify-otp/
│   │   │   ├── profile-setup/
│   │   │   └── kyc/
│   │   ├── (marketing)/      # Marketing pages
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── callback/
│   │   │   ├── feedback/
│   │   │   ├── partner/
│   │   │   ├── reviews/
│   │   │   ├── write-review/
│   │   │   ├── waitlist/
│   │   │   ├── report/
│   │   │   └── refund/
│   │   ├── booking/          # Booking flow
│   │   │   ├── study-hall/
│   │   │   ├── tutor/
│   │   │   ├── payment/
│   │   │   └── success/
│   │   ├── explore/          # Study spaces
│   │   │   ├── [id]/
│   │   │   ├── categories/
│   │   │   ├── location/
│   │   │   └── nearby/
│   │   ├── tuitions/         # Tutor section
│   │   │   ├── [id]/
│   │   │   ├── register/
│   │   │   └── faq/
│   │   ├── legal/            # Legal pages
│   │   │   ├── privacy/
│   │   │   ├── terms/
│   │   │   └── terms-of-use/
│   │   ├── map/              # Map view
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── forms/
│   │   ├── home/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── location/
│   │   ├── map/
│   │   ├── study-spaces/
│   │   ├── tuitions/
│   │   ├── ui/
│   │   └── waitlist/
│   ├── data/
│   ├── lib/
│   │   ├── api/
│   │   ├── constants/
│   │   ├── hooks/
│   │   └── utils/
│   └── types/
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## 📄 Pages

### Public Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, testimonials |
| `/explore` | Browse all study spaces |
| `/explore/[id]` | Study hall detail page |
| `/explore/nearby` | Spaces near user location |
| `/explore/categories/[slug]` | Category filtered spaces |
| `/map` | Interactive map view |
| `/tuitions` | Find home tutors |
| `/tuitions/[id]` | Tutor profile page |
| `/reviews` | All reviews page |
| `/about` | About Zyvo |

### Authentication
| Route | Description |
|-------|-------------|
| `/login` | User login |
| `/signup` | User registration |
| `/forgot-password` | Password recovery |
| `/verify-otp` | OTP verification |
| `/profile-setup` | Student profile setup |
| `/kyc` | KYC verification |

### Booking Flow
| Route | Description |
|-------|-------------|
| `/booking/study-hall` | Book a study space |
| `/booking/tutor` | Book a tutor session |
| `/booking/payment` | Payment checkout |
| `/booking/success` | Booking confirmation with QR |

### Forms & Support
| Route | Description |
|-------|-------------|
| `/contact` | Contact form |
| `/callback` | Request callback |
| `/feedback` | Submit feedback |
| `/write-review` | Write a review |
| `/report` | Report an issue |
| `/refund` | Request refund |
| `/waitlist` | Join waitlist |

### Partner Pages
| Route | Description |
|-------|-------------|
| `/partner` | Partner registration |
| `/tuitions/register` | Tutor registration |

### Legal
| Route | Description |
|-------|-------------|
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |
| `/legal/terms-of-use` | Terms of use |

## 🧩 Components

### Layout
- `Header` - Responsive navbar with dropdowns
- `Footer` - Site footer with links & newsletter

### Reusable
- `LocationPicker` - City/area selector
- `NewsletterSubscription` - Email subscription (3 variants)
- `SpaceCard` - Study space card
- `TutorCard` - Tutor profile card

## 📱 Responsive Design

Zyvo is fully responsive across all devices:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔒 Security Features

- 256-bit SSL encryption
- PCI-DSS compliant payments
- Secure KYC verification
- Data privacy compliance

## 📈 Future Roadmap

- [ ] Mobile app (React Native)
- [ ] Real-time seat availability
- [ ] In-app messaging
- [ ] Loyalty rewards program
- [ ] Group study bookings
- [ ] AI-powered recommendations

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

## 📄 License

This project is proprietary software owned by Zyvo Inc.

## 📞 Contact

- **Website:** [zyvo.in](https://zyvo.in)
- **Email:** hello@zyvo.in
- **Phone:** +91 98765 43210
- **Support:** 1800-123-4567

---

<p align="center">
  Made with ❤️ by <strong>Manohar Bhukya</strong>
</p>
