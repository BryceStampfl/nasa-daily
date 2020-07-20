from flask import Flask, request
import requests

app = Flask(__name__)

api_key = "S5dNkQap4TsmltuK9dm3sVhs52WsOMa96NBC6Nlc"
nasa_url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key


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
