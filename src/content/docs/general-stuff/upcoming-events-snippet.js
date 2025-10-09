await fetch('https://api.sandbox.game/social-events?bannerVisualization[]=events&upcoming=true&past=true&limit=10&offset=0&available=true')
  .then(response => response.json())
  .then(data => {
    // Sorry for the minified renderer ;-)
    const render = j => (r = n => !n ? '' : n.type === 'text' ? n.text : n.type === 'hardBreak' ? '\n' : n.type === 'paragraph' ? (n.content || []).map(r).join('') + '\n\n' : n.type === 'doc' ? (n.content || []).map(r).join('') : '')(JSON.parse(j)).replaceAll(/\n{3,}/g, '\n\n').trim()
    return Object.fromEntries(
      data.upcoming.rows.map(event => [
        event.title,
        {
          startDate: event.startDate ? new Date(event.startDate).toISOString().split('T')[0] : '?',
          description: render(event.description),
          rewards: event.rewards
            .map(reward => [
              reward.amount || null,
              reward.type,
              reward.description ? render(reward.description) : null,
            ].filter(Boolean).join(' ')),
        },
      ])
    )
  })
