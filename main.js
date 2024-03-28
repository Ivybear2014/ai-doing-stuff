Webcam.set({
    width: 350,
    height: 200,
    image_format : 'png',
    png_quality:100
})

camara = document.getElementById("camrra")

Webcam.attach(camara)

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("after").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>'
    });
}
console.log(ml5.version)


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZsmODSvoa/model.json',modelLoaded);


function modelLoaded(){
    console.log("test...")

}

function id1() {
img = document.getElementById("capture_image")
classifier.classify(img, gotResult)
}

function gotResult(error, result) {
if (error) {
    console.error(error)
}
else{
    console.log(result)
    document.getElementById("objects").innerHTML= result[0].label
    document.getElementById("accuracy").innerHTML= result[0].confidence.toFixed(2)*100 + "%"
}0
}//objects,accuracy

