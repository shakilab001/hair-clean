import axios from "axios";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            500,
            500,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "file"
        );
    });

export const uploadSubmit = async (selectedImage) => {
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = async (e) => {
            const height = e.target.height;
            const width = e.target.width;
            if (height > 500 || width > 500) {
                try {
                    const image = await resizeFile(selectedImage);
                    // alert("Image too big, compressing")
                    console.log(image)
                    submitImages(image)
                } catch (err) {
                    console.log(err);
                }
                return false;
            }
            else {
                submitImages(selectedImage)
            }
            return true;
        };
    };
}
const submitImages = (selectedImage) => {
    let imgComplete = 0
    localStorage.setItem('imgComplete', imgComplete)
    let videoAnimationURL, hairDescriptionURL, hairDensityURL
    console.log(
        "===> ~ file: Upload.js ~ line 23 ~ handleSubmission ~ selectedImage",
        selectedImage
    );
    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
    console.log(formData);
    const token = localStorage.getItem('access')
    axios
        .post(`https://hair-animation.myhairdays.com/create-animation-video`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": 'Bearer ' + token,
            },
        })
        .then((result) => {
            videoAnimationURL = result.data
            const HairAnimationjsonURL = JSON.stringify(videoAnimationURL);
            localStorage.setItem("animatedVideo", HairAnimationjsonURL);
            imgComplete += 1
            localStorage.setItem('imgComplete', imgComplete)
        })
        .catch((error) => {
            throw new Error(error);
        });

    axios
        .post(`https://ai-models.myhairdays.com/upload-file-async`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": 'Bearer ' + token,
            },
        })
        .then((result) => {
            hairDescriptionURL = result.data
            const HairDescriptionjsonURL = JSON.stringify(hairDescriptionURL);
            localStorage.setItem("hairDescription", HairDescriptionjsonURL);
            imgComplete += 1
            localStorage.setItem('imgComplete', imgComplete)
        })
        .catch((error) => {
            throw new Error(error);
        });
    axios
        .post(`https://hair-density.myhairdays.com/v1/hair-density`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": 'Bearer ' + token,
            },
        })
        .then((result) => {
            hairDensityURL = result.data;
            const HairDensityjsonURL = JSON.stringify(hairDensityURL);
            localStorage.setItem("hairDensity", HairDensityjsonURL);
            imgComplete += 1
            localStorage.setItem('imgComplete', imgComplete)
        })
        .catch((error) => {
            throw new Error(error);
        });
}