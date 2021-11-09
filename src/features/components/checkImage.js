export default function imageExists(image_url) {
    try {
        var http = new XMLHttpRequest();

        http.open("HEAD", image_url, false);
        http.send();

        return http.status != 404;
    } catch (error) {
       return false; 
    }
  
}