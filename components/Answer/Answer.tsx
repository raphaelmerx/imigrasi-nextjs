import React, { useEffect, useState } from 'react';
import { IconThumbUp, IconThumbDown } from '@tabler/icons-react';


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
interface AnswerProps {
  text: string;
}

export const Answer: React.FC<AnswerProps> = ({ text }) => {
  const paragraphs = text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  // const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>('');
  const [chunks, setChunks] = useState<DocumentChunk[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showExamples, setShowExamples] = useState<boolean>(true);

  const [matchCount, setMatchCount] = useState<number>(5);

  const handleVote = async (vote: number) => {
    if (!vote) {
      alert('Please enter a query.');
      return;
    }
    console.log('Loading:', loading);
    if (loading) {
      return;
    }

    if (vote > 0) {
      console.log('Thumbs-up');
    } else if (vote < 0) {
      console.log('Thumbs-down');
    }

    // Send the vote value via POST
    const response = await fetch(`${BACKEND_URL}/vote`, {
      method: 'POST',
      body: JSON.stringify({vote: vote}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      /* Handle */
      console.log("Voting error")
    }else {

      console.log("Voting success")
    }

  };

  return (
    <div>
      {paragraphs}
      <div className="flex align-text-bottom border-t border-gray-300 my-2 justify-end">
        <p className="pr-2 pt-1">Was this answer useful?</p>
        <button>
          <IconThumbUp
            onClick={() => handleVote(1)}
            className="hover:cursor-pointer hover:text-blue-600 sm:h-6"
          />
        </button>
        <button>
          <IconThumbDown
            onClick={() => handleVote(-1)}
            className="hover:cursor-pointer hover:text-blue-600 sm:h-6"
          />
        </button>
      </div>
    </div>
  );
};
