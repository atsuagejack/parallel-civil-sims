const SUPABASE_URL = "https://khfhzsrzyzyojacdvrfe.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZmh6c3J6eXp5b2phY2R2cmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzgxNjYsImV4cCI6MjA4ODMxNDE2Nn0.ZBrIyT2Tv8dyzkBe9xyhnXB7EIW23-bQQRbS8YlzPag"

const supabase = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

async function signUp(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

await supabase.auth.signUp({
email,
password
})

alert("登録メール確認してね")

}

async function login(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const {data,error} = await supabase.auth.signInWithPassword({

email,
password

})

if(error){

alert(error.message)

}else{

alert("ログイン成功")
createCivilization()

}

}


async function createCivilization(){

const {data:userData} = await supabase.auth.getUser()

const user = userData.user

await supabase.from("civilizations").insert({

user_id:user.id,
name:"My Civilization"

})

}


async function loadCivilization(){

const {data:userData} = await supabase.auth.getUser()

const user = userData.user

const {data} = await supabase

.from("civilizations")
.select("*")
.eq("user_id",user.id)
.single()

stats.order = data.order_stat
stats.freedom = data.freedom_stat
stats.prosperity = data.prosperity_stat
stats.tech = data.tech_stat

updateUI()

  }

async function saveStats(){

const {data:userData} = await supabase.auth.getUser()

const user=userData.user

await supabase

.from("civilizations")

.update({

order_stat:stats.order,
freedom_stat:stats.freedom,
prosperity_stat:stats.prosperity,
tech_stat:stats.tech

})

.eq("user_id",user.id)

  }

