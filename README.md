# 🎰 Royal Casino - Lobby

A modern, responsive casino game lobby built with Next.js, TypeScript, and Tailwind CSS. Features a luxurious glassmorphism design with interactive game cards, favorites system, and premium casino theming.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Running

```bash
# Clone the repository
git clone <your-repository-url>
cd casino-lobby

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the casino lobby.

## 🎮 What I Built

A complete casino game lobby featuring:

- **Premium UI Design**: Glassmorphism effects with casino-themed gold and purple color palette
- **Game Display**: Interactive cards showing 18 casino games (slots, table games, live games)
- **Favorites System**: Add/remove games from favorites with visual feedback
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Modern Animations**: Smooth hover effects, loading states, and micro-interactions
- **Toast Notifications**: User feedback for game interactions and favorites
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Technical Features:

- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with custom utilities for casino theming
- **Component Architecture**: Modular, reusable components
- **Performance Optimized**: Lazy loading and efficient rendering

## 🎯 One Thing I Found Challenging

The most challenging aspect was **implementing the glassmorphism design system** while maintaining performance and accessibility. Balancing the visual appeal of backdrop-blur effects, complex gradients, and layered transparency with:

- Proper contrast ratios for accessibility compliance
- Performance on lower-end devices with intensive CSS effects
- Cross-browser compatibility for backdrop-filter properties
- Ensuring interactive elements remained clickable through glass overlays

The solution involved creating a systematic approach to glass effects with CSS custom properties and careful layering of transparent elements.

## 🚀 One Thing I'd Improve with More Time

**Advanced Game Features & Backend Integration**

With additional time, I would implement:

1. **Real Casino API Integration**: Create a makeshift casino provider for live game data
2. **User Authentication**: Login system with persistent favorites across devices
3. **Advanced Filtering**: Search by provider, rating, game type with real-time results
4. **Game Categories**: Detailed game information, screenshots, and preview videos
5. **Analytics Dashboard**: Track user preferences and popular games
6. **Multilingual Support**: International casino experience with i18n
7. **Advanced Animations**: Particle effects and 3D card interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **State Management**: React Context API
- **Icons**: Emoji-based for universal compatibility
- **Performance**: React.memo, useCallback optimization

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Interactive game cards with hover effects
- ✅ Favorites system with local storage
- ✅ Toast notifications for user feedback
- ✅ Loading states and smooth transitions
- ✅ Accessibility compliant (ARIA labels, keyboard navigation)
- ✅ Modern casino theming with glassmorphism
- ✅ Cross-browser compatibility

---
