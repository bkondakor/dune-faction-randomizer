# Dune Faction Randomizer

## Overview

This is an interactive web application for randomizing and learning about factions in the **Dune** board game. It helps players randomly assign factions to players and provides comprehensive guides for each faction's abilities, strategies, and tips.

## Features

### Faction Randomizer
- **Player Management**: Add 2-6 players with custom names
- **Random Assignment**: Fairly distribute factions among players
- **Expansion Support**: Toggle inclusion of expansion factions (Ix & Tleilaxu)
- **Visual Feedback**: Color-coded faction badges and descriptions

### Comprehensive Faction Guides
Detailed guides for all 8 factions (6 base + 2 expansion):

**Base Game Factions:**
- **House Atreides** - Prescient vision and information advantage (Beginner Friendly)
- **House Harkonnen** - Traitor manipulation and treachery (Beginner Friendly)
- **Fremen** - Desert power and superior mobility (Beginner Friendly)
- **Emperor** - Imperial wealth and Sardaukar elite forces (Beginner Friendly)
- **Spacing Guild** - Control of space travel and logistics (Advanced)
- **Bene Gesserit** - Spiritual manipulation and prediction victory (Advanced)

**Expansion Factions:**
- **Ix** - Technological superiority and hidden mobile stronghold (Intermediate)
- **Tleilaxu** - Genetic mastery and resurrection abilities (Advanced)

### Each Faction Guide Includes:
- Difficulty rating
- Starting conditions (forces, spice, revival rate)
- Special abilities with detailed explanations
- Basic and advanced rules
- Special victory conditions (where applicable)
- Strengths and weaknesses analysis
- Key strategies for gameplay
- Pro tips for mastering the faction

## Technology Stack

- **React 18** - UI framework with hooks
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Project Structure

```
dune-faction-randomizer/
├── src/
│   └── dune-faction-randomizer.jsx  # Main React component
├── index.html                        # HTML entry point
├── package.json                      # Dependencies and scripts
├── vite.config.js                    # Vite configuration
├── CLAUDE.md                         # This file
└── README.md                         # Project readme
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/bkondakor/dune-faction-randomizer.git
cd dune-faction-randomizer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Usage

### Randomizing Factions

1. Enter player names (minimum 2, maximum 6)
2. Optionally enable expansion factions
3. Click "Randomize Factions" button
4. View faction assignments with descriptions

### Using Faction Guides

1. Switch to the "Faction Guides" tab
2. Browse comprehensive guides for each faction
3. Review:
   - Starting conditions and special abilities
   - Strengths and weaknesses
   - Strategic advice and pro tips
   - Basic and advanced rules

## Game Rules Summary

- **Victory Condition**: Control 3 strongholds (solo) or 4 strongholds (alliance) at end of turn
- **Strongholds**: Arrakeen, Carthag, Tuek's Sietch, Sietch Tabr, Habbanya Ridge Flat
- **Alliances**: Maximum 2 factions, formed/broken only during Nexus events
- **Spice Economy**: Required for shipping troops, bidding, and revivals
- **Game Length**: Maximum 10 turns with potential special victories

## Deployment

The application is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## Development Notes

### Component Architecture
- Single-file React component with hooks-based state management
- Two main tabs: Randomizer and Faction Guides
- Responsive design using Tailwind's utility classes
- Theme: Desert/Dune-inspired color palette (amber, orange, black)

### Key State Management
- `players`: Array of player names
- `includeExpansion`: Boolean for expansion faction inclusion
- `assignments`: Current faction assignments
- `activeTab`: Active UI tab (randomizer/guide)

### Styling Approach
- Gradient backgrounds with desert theme
- Glassmorphism effects with backdrop blur
- Color-coded faction badges
- Responsive grid layouts

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is for educational and entertainment purposes related to the Dune board game.

## Acknowledgments

- Based on the Dune board game by Gale Force Nine
- Inspired by the Dune universe created by Frank Herbert
- Built to enhance gameplay experience and help new players learn faction abilities
