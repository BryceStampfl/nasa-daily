from flask import Flask, request
import requests
import config

app = Flask(__name__)

nasa_url = "https://api.nasa.gov/planetary/apod?api_key=" + config.API_KEY


@app.route('/', methods=['GET'])
def home():
    return requests.get(url=nasa_url).json()


@app.route('/api/resources', methods=['GET'])
# date=2020/07/10
def api_specific_date():
    date = request.args.get('date')
    return requests.get(url=nasa_url + "&date=" + date).json()


if __name__ == '__main__':
    app.run()
