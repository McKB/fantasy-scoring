const calculateScore = (player) => {
  const position = player.position
  let score = 0
  let points = 0

  if (position === 'QB') {
    const { passing, rushing } = player.stats

    // PASSING
    points = passing.yards / 25
    score += points

    points = passing.touchdowns * 6
    score += points

    points = passing.interceptions * 3
    score -= points

    // RUSHING
    points = rushing.yards / 10
    score += points

    points = rushing.touchdowns * 6
    score += points

    points = rushing.fumbles * 3
    score -= points

    return score
  }
  else if (position === 'TE' || position === 'RB' || position === 'WR') {
    const { receiving } = player.stats

    // RECEIVING
    points = receiving.receptions
    score += points

    points = receiving.yards / 10
    score += points

    points = receiving.touchdowns * 6
    score += points

    points = receiving.fumbles * 3
    score -= points

    if (position === 'RB' || position === 'WR') {
      const { rushing } = player.stats
      const { kickreturn, puntreturn } = player.stats.return

      // RUSHING
      points = rushing.yards / 10
      score += points

      points = rushing.touchdowns * 6
      score += points

      points = rushing.fumbles * 3
      score -= points

      // KICK RETURN
      points = kickreturn.yards / 15
      score += points

      points = kickreturn.touchdowns * 6
      score += points

      points = kickreturn.fumbles * 3
      score -= points

      // PUNT RETURN
      points = puntreturn.yards / 15
      score += points

      points = puntreturn.touchdowns * 6
      score += points

      points = puntreturn.fumbles * 3
      score -= points

      return score
    }

    return score
  }
  else {
    return 0
  }
}

module.exports = calculateScore
