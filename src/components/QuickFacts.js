import React from 'react';

const QuickFacts = ({ features }) => {
  const { icon, title, value } = features;
  return (
    <div className="tour-feature flex items-center mb-5">
      <div className="feature-icon"></div>
      <div className="feature-name font-bold mr-5 text-[14px] uppercase text-[#777]">
        {title}
      </div>
      <div className="feature-value capitalize text-15px] text-[#777]">
        {value}
      </div>
    </div>
  );
};

export default QuickFacts;
