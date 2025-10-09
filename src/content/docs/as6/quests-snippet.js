// Readable
await fetch('https://api.sandbox.game/experiences/social-event/515/user-data?filter=all', { credentials: 'include' })
  .then(response => response.json())
  .then(data => Object.fromEntries(
    data.all.rows.filter(row => row.questData.totalQuests > 0 && row.questData.visited === true)
      .map(row => [
        row.name,
        {
          ep: `${row.questData.userEp}/${row.questData.totalEp}`,
          quests: row.questData.questsCompletionTimes
            .map(quest => `${'completionTime' in quest ? '✅' : '❌'} ${quest.name}`),
        },
      ])
  ))
