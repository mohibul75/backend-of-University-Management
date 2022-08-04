const axios = require("axios");
require("dotenv").config();
const url = "http://localhost:5000";

const routes = {
    getCourse: async () => {
        try {
            const res = await axios({
                method: "GET",
                url: `${url}/api/course`,
            });
            return res;
        } catch (e) {
            return e;
        }
    },
    addCourse: async () => {
        try {
            const res = await axios({
                method: "POST",
                url: `${url}/api/course`,
                data: {
                    "c_id": "C3",
                    "name": "DBMS",
                    "description": "nothing"
                },
            });
            return res;
        } catch (e) {
            return e;
        }
    },
};

module.exports = routes;