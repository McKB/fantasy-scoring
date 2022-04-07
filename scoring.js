const calculateScore = (player) => {
  const position = player.position
  let score = 0
  let points = 0

  if (position === 'QB') {
    points = player.stats.passing.yards / 25
    score += points

    points = player.stats.passing.touchdowns * 6
    score += points

    points = player.stats.passing.interceptions * 3
    score -= points

    points = player.stats.rushing.yards / 10
    score += points

    points = player.stats.rushing.touchdowns * 6
    score += points

    points = player.stats.rushing.fumbles * 3
    score -= points

    return score
  } else if (position === 'RB' || position === 'WR') {
    points = player.stats.rushing.yards / 10
    score += points

    points = player.stats.rushing.touchdowns * 6
    score += points

    points = player.stats.rushing.fumbles * 3
    score -= points

    points = player.stats.receiving.receptions
    score += points

    points = player.stats.receiving.yards / 10
    score += points

    points = player.stats.receiving.touchdowns * 6
    score += points

    points = player.stats.receiving.fumbles * 3
    score -= points

    points = player.stats.return.kickreturn.yards / 15
    score += points

    points = player.stats.return.kickreturn.touchdowns * 6
    score += points

    points = player.stats.return.kickreturn.fumbles * 3
    score -= points

    points = player.stats.return.puntreturn.yards / 15
    score += points

    points = player.stats.return.puntreturn.touchdowns * 6
    score += points

    points = player.stats.return.puntreturn.fumbles * 3
    score -= points

    return score
  } else if (position === 'TE') {
    points = player.stats.receiving.receptions
    score += points

    points = player.stats.receiving.yards / 10
    score += points

    points = player.stats.receiving.touchdowns * 6
    score += points

    points = player.stats.receiving.fumbles * 3
    score -= points

    return score
  } else {
    return 0
  }
}

module.exports = calculateScore
