import React from 'react';

const LanguageTable = () => {
  const languages = [
    { name: 'Hindi (हिंदी)', reading: 5, writing: 5, speaking: 5 },
    { name: 'English', reading: 5, writing: 5, speaking: 5 },
    { name: 'Russian (Руский)', reading: 5, writing: 5, speaking: 4 },
    { name: 'Urdu (اردو)', reading: 3, writing: 3, speaking: 4 },
    { name: 'Persian (فارسی)', reading: 3, writing: 3, speaking: 1 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;Language</th>
          <th>&nbsp;Reading</th>
          <th>&nbsp;Writing</th>
          <th>&nbsp;Speaking</th>
        </tr>
      </thead>
      <tbody>
        {languages.map((language, index) => (
          <tr key={index}>
            <td>&nbsp;{language.name}</td>
            <td>{renderStars(language.reading)}</td>
            <td>{renderStars(language.writing)}</td>
            <td>{renderStars(language.speaking)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const renderStars = (rating) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} style={{ color:"goldenrod"}}>&#9733;</span>);
  }

  return stars;
};

export default LanguageTable;
