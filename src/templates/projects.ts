interface project{
    title : String,
    url? : String,
    image : String,
    description : String,
    markdown? : String,
    type : "Mobile" | "Web",
    date_finished? : String,
    bg_color? : String
}
export const projects : project[] = [
    {
    title : "Augle.io",
    description : "This is a web based project with the features of augmented reality and 3D editor. 3D editor is used to create 3D scene and position the objects. Augmented reality part is used to display these 3D objects in real world",
    image :"/assets/augle.png",
    type : "Web",
    url : "/portfolio/augle-webapp",
    bg_color : "bg-blue-400"
    },
    {
        title : "Codeyolo",
        description : "This is an online html, css, javascript editor. User can login/signup, create pens, save under his profile, and share with the friends with a link to the pen.",
        image : "/assets/codeyolo.png",
        type : "Web",
        url : "/portfolio/codeyolo-project",
        bg_color : "bg-green-400"

    },
    {
        title : "ArWay",
        description : "This is a Google Maps based navigation mobile app for both android and iOS. User can navigate to his destination with help of camera navigating through an arrow in real world",
        image : "/assets/arway.jpg",
        type : "Mobile",
        url : "/portfolio/arway-mobile-app",
        bg_color : "bg-teal-400"

    },
    {
        title : "Motion layer",
        description : "This is an editor app used to create the animations on a static image by providing the layers of the image. User can record and save the animation in video format",
        image : "/assets/motionlayer.png",
        type : "Web" ,
        url : "/portfolio/motionlayer",
        bg_color : "bg-blue-400"

    }

]