let wins = 50
let defeats = 20

const playerScore = setScore(wins, defeats)

function setScore(numWin, numDefeat) {
  let result = numWin - numDefeat

  return result
}

function setRank() {
  let score = playerScore

  if (score <= 10) {
    return "Ferro"
  } else if (score > 10 && score <= 20) {
    return "Bronze"
  } else if (score > 20 && score <= 50) {
    return "Prata"
  } else if (score > 50 && score <= 80) {
    return "Ouro"
  } else if (score > 80 && score <= 90) {
    return "Diamante"
  } else if (score > 90 && score <= 100) {
    return "Lendário"
  } else if (score >= 100) {
    return "Imortal"
  }
}

function showRank() {
  let totalwins = wins
  let rank = setRank()

  console.log(
    `O Herói tem de saldo de ${totalwins} vitórias e está no Rank de ${rank}`
  )
}

showRank()
