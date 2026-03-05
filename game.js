import { supabase } from './supabase.js'

let stats = {
  population: 10,
  technology: 1,
  culture: 1,
  faith: 1
}

export function updateGame() {

  stats.population += Math.floor(Math.random() * 3)
  stats.technology += Math.random() > 0.7 ? 1 : 0

  render()
}

function render() {

  document.getElementById("population").innerText = stats.population
  document.getElementById("technology").innerText = stats.technology
}

export async function saveStats(userId) {

  const { data, error } = await supabase
    .from('civilizations')
    .upsert({
      user_id: userId,
      population: stats.population,
      technology: stats.technology,
      culture: stats.culture,
      faith: stats.faith
    })

  if (error) {
    console.error(error)
  } else {
    console.log("saved", data)
  }
}
