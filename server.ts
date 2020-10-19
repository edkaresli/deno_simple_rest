import { opine, json } from 'https://deno.land/x/opine@0.24.0/mod.ts'; 

const app = opine();

app.use(json());

app.get('/', (req, res) => {
    console.log("Received a GET request");
    res.json({ message: "Received a GET request "});
});

app.post('/', (req, res) => {
    const body = req.parsedBody;    
    console.log("POST request body: ", body);
    res.json({ message: "Received a POST request ", body });    
});

app.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.parsedBody;
    console.log(`PUT request body. Id: ${id}, body: ${JSON.stringify(body)} `);
    res.json({ message: "Received a PUT request ", id, body });    
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`DELETE request received with param id: ${id}`);
    res.json({message: "Received a DELETE request", id});
})

app.listen(5000);