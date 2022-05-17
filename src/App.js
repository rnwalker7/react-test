import './App.css';
import React from 'react';
import { CrosswordProvider, CrosswordGrid, DirectionClues } from '@jaredreisinger/react-crossword';

const data = {
    across: {
        1: {
            clue: 'African or ________ swallow',
            answer: 'EUROPEAN',
            row: 2,
            col: 0
        },
        3: {
            clue: 'Foo',
            answer: 'BAR',
            row: 4,
            col: 1
        }
    },
    down: {
        2: {
            clue: 'Opposite of rural',
            answer: 'URBAN',
            row: 2,
            col: 1
        },
        4: {
            clue: 'Mountainous speakers',
            answer: 'ALPINE',
            row: 0,
            col: 4
        }
    }
};

function App() {
  return (
    <div className="App">
      <CrosswordProvider data={data}>
        <div style={{ display: 'flex', gap: '2em' }}>
          <DirectionClues direction="across" />
          <div style={{ width: '33vw'}}>
            <CrosswordGrid />
          </div>
          <DirectionClues direction="down" />
        </div>
      </CrosswordProvider>
    </div>
  );
}

export default App;
