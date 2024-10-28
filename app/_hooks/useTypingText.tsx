import { useState, useEffect } from "react";

// Custom Hook
const useTypingText = (texts: string[], typingSpeed: number, deletingSpeed: number) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const speed = isDeleting
      ? deletingSpeed / currentText.length
      : typingSpeed / currentText.length;

    const handleTyping = setTimeout(() => {
      // 타이핑 중일 때
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
      // 타이핑 완료 후 삭제 대기
      else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 500); // 1초 후 삭제 시작
      }
      // 삭제 중일 때
      else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }
      // 삭제 완료 후 다음 텍스트로
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(handleTyping); // 클린업 타이머
  }, [charIndex, isDeleting, texts, currentTextIndex, typingSpeed]);

  return displayText;
};

export default useTypingText;
