Const express = requeri("express")
Const mongoose= requeri("mongoose")
Const bodyParser = requeri("body-parser")
Const app= "express"

app.listen(3000, () => console.log("Escuchando el puerto 3000");)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose
.connet(

)

.catch((error) => handleError(error));

Const CVideoschema = new mongoose.schema(
    {
        _id: Number,
        title: String,
        Description: String,
        Duracion: Number,
        Autor: String,
        Enlace: String,
        FechaAdd: {type: Date, default: Date.Now}
    },
    {
        collection: "Cvideos"
    }
);

Const CVideo = mongoose.model("CVideo", CVideoschema)

app.get("/api/CVideos/id", function (req, res){
    //Mostrar video por ID  
    CVideo.findById(req.params.id, function (err, CVideo){
        if (err) res.status(500).send("Error en la base de datos");
        else{
            if(CVideo != null){
                res.status(200).json(CVideo);
            } else res.status(404).send("No se encontro este video");
        }
    });
});

app.get("/api/CVideos/Autor", function (req, res){
    //Mostrar videos de el autor
    CVideo.findById(req.params.Autor, function (err, CVideo){
        if (err) res.status(500).send("Error en la base de datos");
        else{
            if(CVideo != null){
                res.status(200).json(CVideo);
            } else res.status(404).send("No se encontro este Autor");
        }
    });
});

app.post("/api/CVideos", function (req, res) {
    //agregar un nuevo video
    const  = new CVideo({
      _id: req.body.id,
      title: req.body.title,
      Description: req.body.Description,
      Duracion: req.body.Duracion,
      Autor: req.body.Autor,
      Enlace: req.nody.Autor,
      FechaAdd: new Date(2001, 03, 15),
    });

    app.delete("/api/CVideos/:id", function(req, res){
        //Delete video con ID
        CVideo.findById(req.params.id, function (err, CVideo){
            if(err) res.status(500).send("Error en la base de datos");
            else{
                if(CVideo !=null){
                    CVideo.remove(function(error, result){
                        if(error) res.status(500).send("Error en la base de datos");
                        else{
                            res.status(200).send("Video seleccionado fue eliminado")
                        }
                    });
                } else res.status(404).send("El video seleccionado no fue encontrado")
            }
        });
    });

