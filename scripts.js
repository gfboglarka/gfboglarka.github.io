
class Data {
    constructor(source, title, description) {
        this.source = source;
        this.title = title;
        this.description = description;
    }
};

const data1 = new Data("images/image1.jpg", "Dawn", "Early morning lights make this city look stunning.");
const data2 = new Data("images/image2.jpg", "Sunset", "Sunset observed from the shadow of the arches.");
const data3 = new Data("images/image3.jpg", "Autumn", "During the season of fall, yellow foliage makes the view of this city bridge magnificient.");
const data4 = new Data("images/image4.jpg", "Skyscrapers", "Looking up to the sky, we can feel dizzy watching heights.");
const data5 = new Data("images/image5.jpg", "Network", "Imagine the stories, relationships, community behind these walls.");
const data6 = new Data("images/image6.jpg", "Tuscany", "Enjoy the view of a typical Tuscany settlement on the top of a hill, with burnt orange colour with a touch of brown.");
const data7 = new Data("images/image7.jpg", "Bridge in the city", "Another bridge, with couples walking or going by motorcycle.");
const data8 = new Data("images/image8.jpg", "Centre", "Inner city, walking in the centre by daylight.");
const data9 = new Data("images/image9.jpg", "Rush hour", "Sunset, end of the day, crowd, tired people rushing home.");
const data10 = new Data("images/image10.jpg", "Archade", "Coming out from the dark to the light.");

let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10];

let index_of_current_photo = 0

function load_photo(photoNumber) {
    $(".thumbnail").removeClass('active');
    $("#photo").attr("src", imagesData[photoNumber].source);
    $("#photo-title").html(imagesData[photoNumber].title);
    $("#photo-description").html(imagesData[photoNumber].description);
    $(`.thumbnail[data-index=${photoNumber}]`).addClass('active');
};


imagesData.forEach((item, index) => {
    $("#thumb").append(`<img class='thumbnail' src=${item.source} alt=${item.title} data-index=${index}>`);
    }
);

load_photo(index_of_current_photo);

$(".thumbnail").click((event) => {
    let indexClicked = $(event.target).attr("data-index");
    let numberIndex = parseInt(indexClicked);
    load_photo(numberIndex);
    index_of_current_photo = numberIndex;
})

let number_of_pictures = imagesData.length;

$(".rightArrow").click(() => {
    if (index_of_current_photo < number_of_pictures-1) {
        index_of_current_photo++;
    } else {
        index_of_current_photo = 0
    }
    load_photo(index_of_current_photo);
});

$(".leftArrow").click(() => {
    if (index_of_current_photo > 0) {
        index_of_current_photo--;
    } else {
        index_of_current_photo = number_of_pictures-1
    }
    load_photo(index_of_current_photo);
});



