import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gamepad2, Trophy, Star, RefreshCw, Gift, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const triviaQuestions = [
  {
    question: "Which country has the most UNESCO World Heritage Sites?",
    options: ["Italy", "China", "Spain", "France"],
    correct: 0,
    fact: "Italy has 58 UNESCO World Heritage Sites!",
  },
  {
    question: "What is the world's longest flight route?",
    options: [
      "New York to Singapore",
      "Perth to London",
      "Auckland to Doha",
      "Sydney to Dallas",
    ],
    correct: 0,
    fact: "Singapore Airlines operates this 18+ hour flight!",
  },
  {
    question: "Which city is known as the 'Venice of the North'?",
    options: ["Amsterdam", "Stockholm", "Bruges", "Copenhagen"],
    correct: 1,
    fact: "Stockholm is built on 14 islands connected by bridges!",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correct: 2,
    fact: "Vatican City is only 0.44 km²!",
  },
  {
    question: "Which is the most visited country in the world?",
    options: ["Spain", "USA", "France", "China"],
    correct: 2,
    fact: "France receives over 90 million tourists annually!",
  },
];

const destinations = [
  { name: "Paris", emoji: "🗼", country: "France" },
  { name: "Tokyo", emoji: "🗾", country: "Japan" },
  { name: "New York", emoji: "🗽", country: "USA" },
  { name: "Dubai", emoji: "🏙️", country: "UAE" },
  { name: "London", emoji: "🎡", country: "UK" },
  { name: "Bali", emoji: "🏝️", country: "Indonesia" },
  { name: "Sydney", emoji: "🦘", country: "Australia" },
  { name: "Rome", emoji: "🏛️", country: "Italy" },
];

const scratchRewards = [
  { type: "discount", value: "20% OFF", color: "bg-purple-500" },
  { type: "freenight", value: "Free Night", color: "bg-blue-500" },
  { type: "upgrade", value: "Free Upgrade", color: "bg-teal-500" },
  { type: "discount", value: "15% OFF", color: "bg-orange-500" },
  { type: "voucher", value: "$100 Voucher", color: "bg-pink-500" },
  { type: "points", value: "500 Points", color: "bg-green-500" },
];

export function Games() {
  const [activeGame, setActiveGame] = useState<"trivia" | "memory" | "scratch" | null>(null);
  
  // Trivia Game State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [triviaComplete, setTriviaComplete] = useState(false);

  // Memory Game State
  const [memoryCards, setMemoryCards] = useState(
    [...destinations, ...destinations]
      .sort(() => Math.random() - 0.5)
      .map((dest, idx) => ({ ...dest, id: idx, flipped: false, matched: false }))
  );
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [memoryScore, setMemoryScore] = useState(0);
  const [moves, setMoves] = useState(0);

  // Scratch Card State
  const [scratched, setScratched] = useState(false);
  const [revealedReward, setRevealedReward] = useState<any>(null);

  const handleTriviaAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === triviaQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < triviaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setTriviaComplete(true);
      }
    }, 2000);
  };

  const resetTrivia = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setTriviaComplete(false);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (memoryCards[id].flipped || memoryCards[id].matched) return;

    const newCards = [...memoryCards];
    newCards[id].flipped = true;
    setMemoryCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (newCards[first].name === newCards[second].name) {
        setTimeout(() => {
          newCards[first].matched = true;
          newCards[second].matched = true;
          setMemoryCards(newCards);
          setFlippedCards([]);
          setMemoryScore(memoryScore + 10);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setMemoryCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetMemory = () => {
    setMemoryCards(
      [...destinations, ...destinations]
        .sort(() => Math.random() - 0.5)
        .map((dest, idx) => ({ ...dest, id: idx, flipped: false, matched: false }))
    );
    setFlippedCards([]);
    setMemoryScore(0);
    setMoves(0);
  };

  const handleScratch = () => {
    const reward = scratchRewards[Math.floor(Math.random() * scratchRewards.length)];
    setRevealedReward(reward);
    setScratched(true);
  };

  const resetScratch = () => {
    setScratched(false);
    setRevealedReward(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Gamepad2 className="w-4 h-4" />
            <span>Fun & Games</span>
          </div>
          <h1 className="mb-4">Travel Games & Activities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test your travel knowledge, play memory games, and win exciting rewards!
          </p>
        </motion.div>

        {!activeGame && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trivia Game */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer group"
                onClick={() => setActiveGame("trivia")}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Trophy className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="mb-2">Travel Trivia</h2>
                <p className="text-gray-600 mb-4">
                  Test your knowledge about destinations around the world
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full">
                  Start Quiz
                </Button>
              </Card>
            </motion.div>

            {/* Memory Game */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer group"
                onClick={() => setActiveGame("memory")}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="mb-2">Memory Match</h2>
                <p className="text-gray-600 mb-4">
                  Match destination pairs and test your memory skills
                </p>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white rounded-full">
                  Play Game
                </Button>
              </Card>
            </motion.div>

            {/* Scratch Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 text-center hover:shadow-2xl transition-shadow cursor-pointer group"
                onClick={() => setActiveGame("scratch")}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Gift className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="mb-2">Scratch & Win</h2>
                <p className="text-gray-600 mb-4">
                  Reveal your reward and get exclusive travel discounts
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-full">
                  Try Your Luck
                </Button>
              </Card>
            </motion.div>
          </div>
        )}

        {/* Trivia Game */}
        <AnimatePresence>
          {activeGame === "trivia" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="p-8 max-w-2xl mx-auto">
                {!triviaComplete ? (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-600">
                        Question {currentQuestion + 1} of {triviaQuestions.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span>Score: {score}</span>
                      </div>
                    </div>

                    <motion.h2
                      key={currentQuestion}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      {triviaQuestions[currentQuestion].question}
                    </motion.h2>

                    <div className="space-y-3">
                      {triviaQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => !showResult && handleTriviaAnswer(index)}
                          disabled={showResult}
                          className={`w-full p-4 rounded-xl text-left transition-all ${
                            showResult
                              ? index === triviaQuestions[currentQuestion].correct
                                ? "bg-green-100 border-2 border-green-500"
                                : index === selectedAnswer
                                ? "bg-red-100 border-2 border-red-500"
                                : "bg-gray-100"
                              : "bg-gray-100 hover:bg-teal-50 hover:border-teal-500 border-2 border-transparent"
                          }`}
                          whileHover={!showResult ? { scale: 1.02, x: 10 } : {}}
                          whileTap={!showResult ? { scale: 0.98 } : {}}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>

                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-blue-50 rounded-xl"
                      >
                        <p className="text-gray-700">
                          💡 {triviaQuestions[currentQuestion].fact}
                        </p>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: 2 }}
                      className="text-6xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <h2 className="mb-4">Quiz Complete!</h2>
                    <p className="mb-6">
                      You scored {score} out of {triviaQuestions.length}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={resetTrivia}
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Play Again
                      </Button>
                      <Button
                        onClick={() => setActiveGame(null)}
                        variant="outline"
                        className="flex-1 rounded-full"
                      >
                        Back to Games
                      </Button>
                    </div>
                  </motion.div>
                )}

                {!triviaComplete && (
                  <Button
                    onClick={() => setActiveGame(null)}
                    variant="outline"
                    className="w-full mt-6 rounded-full"
                  >
                    Exit Game
                  </Button>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Memory Game */}
        <AnimatePresence>
          {activeGame === "memory" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="p-8 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <span>Score: {memoryScore}</span>
                    <span>Moves: {moves}</span>
                  </div>
                  <Button
                    onClick={resetMemory}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  {memoryCards.map((card) => (
                    <motion.div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className="aspect-square cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative w-full h-full">
                        <motion.div
                          className={`absolute inset-0 rounded-xl flex items-center justify-center text-4xl ${
                            card.matched
                              ? "bg-green-100"
                              : card.flipped
                              ? "bg-white border-2 border-teal-500"
                              : "bg-gradient-to-br from-teal-500 to-purple-600"
                          }`}
                          animate={{
                            rotateY: card.flipped || card.matched ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {card.flipped || card.matched ? (
                            <span style={{ transform: "rotateY(180deg)" }}>
                              {card.emoji}
                            </span>
                          ) : (
                            <span className="text-white">?</span>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={() => setActiveGame(null)}
                  variant="outline"
                  className="w-full rounded-full"
                >
                  Back to Games
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scratch Card */}
        <AnimatePresence>
          {activeGame === "scratch" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="p-8 max-w-md mx-auto">
                <h2 className="text-center mb-6">Scratch & Win!</h2>

                <div className="relative">
                  <motion.div
                    className={`h-64 rounded-2xl flex items-center justify-center ${
                      scratched && revealedReward
                        ? revealedReward.color
                        : "bg-gradient-to-br from-orange-500 to-pink-600"
                    }`}
                    animate={scratched ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {!scratched ? (
                      <div className="text-center text-white">
                        <Gift className="w-16 h-16 mx-auto mb-4" />
                        <p>Click to reveal your reward!</p>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center text-white"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Trophy className="w-16 h-16 mx-auto mb-4" />
                        </motion.div>
                        <h2>{revealedReward?.value}</h2>
                        <p className="mt-2">Congratulations!</p>
                      </motion.div>
                    )}
                  </motion.div>

                  {!scratched && (
                    <motion.div
                      className="absolute inset-0 bg-gray-300 rounded-2xl flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={handleScratch}
                    >
                      <p className="text-gray-600">Click to Scratch</p>
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  {scratched && (
                    <Button
                      onClick={resetScratch}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-full"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Try Again
                    </Button>
                  )}
                  <Button
                    onClick={() => setActiveGame(null)}
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    Back to Games
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
