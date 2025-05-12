# English Quiz Puzzle

A React-based educational game that teaches English through an interactive murder mystery. Perfect for beginner English learners (A1 level) who want to practice vocabulary, numbers, and basic grammar in an engaging context.

## ✨ Features

- 🔍 **Engaging Mystery Story**
  - Follow a murder investigation from scene to scene
  - Interact with various characters with distinct personalities
  - Solve the mystery while learning English vocabulary

- 📚 **Language Learning Elements**
  - Practice essential vocabulary in context
  - Learn numbers, time expressions, and everyday objects
  - Master singular and plural forms naturally
  - Improve listening comprehension with audio elements

- 🎮 **Interactive Gameplay**
  - Answer questions to progress through the story
  - Built-in dictionary for reference
  - Audio recordings for pronunciation practice
  - Immediate feedback on answers

- 🎨 **Rich Visual Experience**
  - Character illustrations for each interaction
  - Scene images that set the context
  - Responsive design that works on all devices
  - Clean, intuitive interface
  - Notice that I have used AI for sake of image generation.

## 🛠️ Technologies

- **Frontend Framework**: React 19.1
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v7
- **State Management**: React Context API
- **Development**: Create React App

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/english-quiz-puzzle.git
   cd english-quiz-puzzle 
   ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

## 📁 Project Structure
```bash
src/
├── components/         # Reusable UI components
│   ├── Audio.js        # Audio player component
│   ├── BaseDialog.js   # Base dialog template
│   ├── Dialog.js       # Character dialog component
│   ├── Question.js     # Question interaction component
│   ├── Scene.js        # Scene display component
│   └── navbar.js       # Navigation and dictionary
├── contexts/
│   └── UserContext.js  # User data management
├── data/
│   ├── audios.js       # Audio file references
│   ├── characters.js   # Character definitions
│   ├── scenes.js       # Scene definitions
│   └── words.js        # Dictionary translations
├── pages/              # Game scenes
│   ├── Start.js        # Game introduction
│   ├── Scene1.js       # Restaurant scene
│   ├── Scene2.js       # Hotel scene
│   └── ...             # Additional scenes
├── static/
│   └── images/         # Background and character images
└── App.js              # Main application component
```
## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1.Fork the repository
2.Create your feature branch (git checkout -b feature/NewLesson)
3.Commit your changes (git commit -m 'Add some new vocabulary lesson')
4.Push to the branch (git push origin feature/NewLesson)
5.Open a Pull Request

I will always respond and see the pulls, thank you in advance.