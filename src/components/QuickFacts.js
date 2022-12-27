import React from 'react';

const QuickFacts = () => {
  return (
    <div className="tour-facts mb-[70px]">
      <div className="secondary-heading">
        <h3 className="secondary-heading-text mb-5">Quick Facts</h3>
      </div>
      <div className="tour-feature flex items-center mb-5">
        <div className="feature-icon"></div>
        <div className="feature-name font-bold mr-5 text-[14px] uppercase text-[#777]">
          Next Date
        </div>
        <div className="feature-value capitalize text-15px] text-[#777]">
          June 2021
        </div>
      </div>
      <div className="tour-feature flex items-center mb-5">
        <div className="feature-icon"></div>
        <div className="feature-name font-bold mr-5 text-[14px] uppercase text-[#777]">
          DIFFICULTY
        </div>
        <div className="feature-value capitalize text-15px] text-[#777]">
          Medium
        </div>
      </div>
      <div className="tour-feature flex items-center mb-5">
        <div className="feature-icon"></div>
        <div className="feature-name font-bold mr-5 text-[14px] uppercase text-[#777]">
          PARTICIPANTS
        </div>
        <div className="feature-value capitalize text-15px] text-[#777]">
          15 People
        </div>
      </div>
      <div className="tour-feature flex items-center">
        <div className="feature-icon"></div>
        <div className="feature-name font-bold mr-5 text-[14px] uppercase text-[#777]">
          RATING
        </div>
        <div className="feature-value capitalize text-15px] text-[#777]">
          4.8 / 5
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
