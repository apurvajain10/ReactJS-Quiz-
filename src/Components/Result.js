import React, { Component } from 'react';

const Result = ({score, playAgain}) => (
    <div className="score-board">
    <div className="score">You scored {score} / 5.</div>
    <button className="playBtn" onClick={playAgain}>
        playAgain!
    </button>
    </div>
);

export default Result;