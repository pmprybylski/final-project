//Function
function handleSubmit() {
    d3.event.preventDefault();
}
d3.json("data/mapdata.json").then((dataFile) => {
    console.log(dataFile)
})