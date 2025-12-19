"use client";

import { useState, useEffect } from "react";
import { words } from "@/lib/words";

export default function Game() {
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("light");
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won'

  const resetGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setInputValue("");
    setGameStatus("playing");
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const displayWord = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    setInputValue(value);
  };

  const guessLetter = () => {
    if (!inputValue) {
      alert("Caixa vazia. Por favor, adicione uma letra.");
      return;
    }

    const letter = inputValue.toLowerCase();

    if (guessedLetters.includes(letter)) {
      alert("Você já adivinhou essa letra!");
      setInputValue("");
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);
    setInputValue("");
  };

  useEffect(() => {
    if (gameStatus === 'playing' && selectedWord && selectedWord.split("").every((letter) => guessedLetters.includes(letter))) {
      setGameStatus("won");
    }
  }, [guessedLetters, selectedWord, gameStatus]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      guessLetter();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-300 to-green-400 dark:from-blue-800 dark:to-green-900 min-h-screen flex justify-center items-center font-sans text-gray-800 dark:text-white p-4">
      {gameStatus === "won" && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-10">
          <div className="bg-white/80 dark:bg-black/80 p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold text-green-500 dark:text-green-400 mb-4">Parabéns!</h2>
            <p className="text-lg mb-6">Você adivinhou a palavra corretamente!</p>
            <button
              onClick={resetGame}
              className="cursor-pointer bg-gradient-to-b from-blue-400 to-blue-600 text-white py-3 px-6 border-none rounded-lg shadow-md transition-all duration-300 font-bold hover:shadow-xl hover:from-blue-500 hover:to-blue-700"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/50 dark:border-black/50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span className="text-2xl">{theme === "light" ? "☀️" : "🌙"}</span>
      </button>
      <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/50 dark:border-black/50 flex flex-col justify-center items-center w-full max-w-lg p-6 md:p-10 rounded-2xl shadow-2xl gap-6">
        <h1 className="text-white bg-gradient-to-b from-blue-400 to-blue-600 p-3 rounded-lg text-2xl md:text-3xl shadow-md">
          Adivinhe a Palavra
        </h1>

        <div className="flex gap-2 text-xl md:text-2xl italic">
          <p>Dica:</p>
          <p className="text-green-600 dark:text-green-400">Fruta</p>
        </div>

        <p className="tracking-[0.2em] text-gray-800 dark:text-white text-2xl md:text-4xl">
          {displayWord}
        </p>

        <div className="flex items-center justify-center gap-2">
          <label
            htmlFor="letter-input"
            className="whitespace-nowrap text-md md:text-lg font-bold text-blue-500 dark:text-blue-300"
          >
            Adivinhe uma letra:
          </label>
          <input
            type="text"
            id="letter-input"
            maxLength={1}
            className="border-2 border-blue-400 dark:border-blue-300 rounded-lg w-12 h-12 p-2 text-2xl text-center bg-white/50 dark:bg-black/50 text-gray-800 dark:text-white"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          onClick={guessLetter}
          className="cursor-pointer bg-gradient-to-b from-green-400 to-green-600 text-white py-3 px-6 border-none rounded-lg shadow-md transition-all duration-300 font-bold hover:shadow-xl hover:from-green-500 hover:to-green-700"
        >
          Enviar
        </button>

        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/50 dark:border-black/50 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold text-blue-500 dark:text-blue-300">Letras Adivinhadas</h3>
          <p className="m-1 text-base text-gray-800 dark:text-white break-all p-2">
            {guessedLetters.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
