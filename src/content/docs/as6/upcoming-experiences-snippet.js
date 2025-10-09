await fetch('https://api.sandbox.game/experiences/social-event/515')
  .then(response => response.json())
  .then(data => data.map(experience =>
    `${experience.publishDate ? new Date(experience.publishDate).toISOString().split('T')[0] : '????-??-??'} ${experience.name ?? '😶‍🌫️ unknown'}`
  ))
