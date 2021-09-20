const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8082;
const docClient = require("./dynamodbConfig");

const app = express();
app.use(cors());


app.get("/items", (req, res) => {
    var params = {
        TableName: "products"
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
            res.send();
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]);
            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

app.get("/items/:id", (req, res) => {
    const { id } = req.params;
    var params = {
        TableName: "products",
        Key: {
            _id: id
        }
    };

    docClient.get(params, (err, data) => {
        if (err) {
            console.log(err);
            res.send();
        } else {
            res.contentType = 'application/json';
            res.send(data.Item);
        }
    });
});

app.post("/items/:id", (req, res) => {
    const { id } = req.params;
    var params = {
        TableName: "clickedItems",
        Item: {
            "item": id
        }
    };
    console.log("Adding a new click...");
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            res.send();
        }
    });

});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})