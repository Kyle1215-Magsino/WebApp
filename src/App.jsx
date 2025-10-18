import React from 'react'
import './App.css'

export default function App() {
  const cards = [
    { name: 'kyle', title: 'Product Designer', description: 'Designs delightful user experiences and interfaces.' },
    { name: 'jm pagaran', title: 'Frontend Engineer', description: 'Builds fast, accessible, and maintainable web apps.' },
    { name: 'paolo palma ', title: 'Product Manager', description: 'Coordinates cross-functional teams to deliver value.' },
  ]

  return (
    <div className="app">
      <header>
        <h1>Team Cards</h1>
        <p className="subtitle">Three sample cards with name, title and description</p>
      </header>

      <main>
        <div className="cards-grid">
          {cards.map((card, i) => (
            <div className="card-item" key={i}>
              <h3 className="card-name">{card.name}</h3>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
