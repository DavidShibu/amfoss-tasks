import csv
import datetime
import discord
from discord.ext import commands
import requests
from bs4 import BeautifulSoup

# Define your intents
intents = discord.Intents.default()
intents.typing = False
intents.presences = False

# Initialize the bot with the intents
bot = commands.Bot(command_prefix="!", intents=intents)

# Define the CSV file name 
csvFileName = f"liveScore.csv"

# Define a command to fetch cricket data
@bot.command()
async def livescore(ctx):
    url = "https://www.espncricinfo.com/live-cricket-score"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    dates = []

    # Find the outer div
    outer_div = soup.find('div', class_='ds-flex ds-flex-wrap')
    # Find date
    date_divs = outer_div.find('div', class_='ds-text-tight-xs ds-truncate ds-text-typo-mid3')
    for score_element in date_divs:
        score = score_element.text.strip()
        dates.append(score)
    dateData = dates[0].split(',')
    date = dateData[2].lstrip()+' '+dateData[3]

    scores = []
    # Find Score
    score_divs = outer_div.find('div', class_='ds-flex ds-flex-col ds-mt-2 ds-mb-2')
    for score_element in score_divs:
        score = score_element.text.strip()
        scores.append(score)
    matchScores = scores[0]+' \n'+ scores[1]

    tosses = []
    # Find toss
    score_divs = outer_div.find('p', class_='ds-text-tight-s ds-font-regular ds-truncate ds-text-typo')
    for score_element in score_divs:
        score = score_element.text.strip()
        tosses.append(score)
    toss = tosses[0]

    #add data to csv
    # Generate a timestamp
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    #create csv data
    data=[[scores[0],scores[1],toss,date,timestamp]]
    # Write data to the CSV file
    with open(csvFileName, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(data)

    await ctx.send(f"Fetching live scores... \n{matchScores}\n{toss}\n{date}")

# Remove the default help command
bot.remove_command('help')

@bot.command()
async def help(ctx):
    await ctx.send(f"Commands.... \n!livescore-to get the livescore \n!generate-get the csv file the livescores are stored in")

@bot.command()
async def generate(ctx):
    await ctx.send(file=discord.File(csvFileName))

# Start the bot
bot.run('MTE1NTM5Nzg1NzMzMTkyMDkyNg.GIReGy.Tdt08RYweYOBFY8rR_NuWbGq_N8baDZGmrze9E')
