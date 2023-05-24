import React, { useState } from 'react';
import { IconThumbUp, IconThumbDown } from '@tabler/icons-react';

import { getSessionId } from '@/utils';

import './answer.module.css';
import styles from './answer.module.css';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
interface AnswerProps {
  text: string;
  query: string;
  answered: boolean;
}

export const Answer: React.FC<AnswerProps> = ({ text, query, answered }) => {
  const paragraphs = text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  const [voted, setVoted] = useState<boolean>(false);

  const handleVote = async (vote: number) => {
    const session_id = getSessionId();

    const response = await fetch(`${BACKEND_URL}/vote`, {
      method: 'POST',
      body: JSON.stringify({
        vote: vote,
        session_id: session_id,
        question: query,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      /* Handle */
      console.log('Voting error');
    } else {
      setVoted(true);
      console.log('Voting success');
    }
  };

  return (
    <div>
      {paragraphs}
      <div
        className={`flex align-text-bottom border-t border-gray-300 my-2 justify-end ${
          (answered && !voted) ? styles.fadeIn : 'invisible'
        }`}
      >
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
