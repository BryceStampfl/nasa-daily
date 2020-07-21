import moment from 'moment';


class JsonService {

    async getData() {
        let todaysDate = moment(new Date()).format("YYYY-MM-DD");
        return fetch('http://localhost:5000/api/resources?date=' + todaysDate)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .then(json => {
                console.log("Retrieved items:");
                console.log(json);
                return json;
            })
    }
}

export default JsonService;