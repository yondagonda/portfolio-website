import React, { useState } from 'react';

function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'yonniedooo@gmail.com';

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.log('Failed to copy email:', error);
    }
  };

  return (
    <button
      className="py-3 px-8 rounded-2xl bg-blue-600 text-white font-bold"
      onClick={handleCopyClick}
    >
      {isCopied ? 'Email Copied!' : 'Copy Email'}
    </button>
  );
}

export default CopyEmailButton;
