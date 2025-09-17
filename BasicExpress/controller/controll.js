export default {
    home: (req,res)=> res.status(200).send("Hello World"),
    user: (req,res)=> res.status(200).send(`hello, ${req.params.name}`)
}