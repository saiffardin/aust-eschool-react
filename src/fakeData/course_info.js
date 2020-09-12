var courses = [
    { "id": 1, "course_name": "Modern Psychology", "instructor": "Emogene Lidgett", "price": 97, "image": "https://magazine.scientificmalaysian.com/wp-content/uploads/2014/05/Modern-psychology-small.jpg" },

    { "id": 2, "course_name": "Data Structures", "instructor": "Rodi Cayford", "price": 25, "image": "https://cecieee.org/wp-content/uploads/2018/11/data-structure-350x250@2x.jpg" },

    { "id": 3, "course_name": "C Programming", "instructor": "Neila McFfaden", "price": 74, "image": "https://online.crbtech.in/wp-content/uploads/2019/03/C-programming-1024x530.png" },

    { "id": 4, "course_name": "Java Programming", "instructor": "Sigfrid Pitkeathley", "price": 48, "image": "https://www.pngitem.com/pimgs/m/174-1746632_java-logo-transparent-png-java-programming-language-logo.png" },

    { "id": 5, "course_name": "Object Oriented Programming", "instructor": "Nikki Walder", "price": 38, "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190717114649/Object-Oriented-Programming-Concepts.jpg" },

    { "id": 6, "course_name": "Python", "instructor": "Thurstan Hedden", "price": 68, "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/BFMMlbcQvml9HSqXcvNp" },

    { "id": 7, "course_name": "Design Pattern", "instructor": "Augustin Cowpland", "price": 64, "image": "https://miro.medium.com/max/720/1*nwakpRp_GabhICWPNw5VDQ.png" },

    { "id": 8, "course_name": "Operating System", "instructor": "Harlene Desbrow", "price": 48, "image": "https://www.ddesignerr.com/wp-content/uploads/2013/05/Windows-Vs-Apple-HD-Wallpaper.jpg" },

    { "id": 9, "course_name": "Micro-processor", "instructor": "Mureil Losbie", "price": 44, "image": "https://wallup.net/wp-content/uploads/2017/03/29/89657-Android_operating_system.jpg" },

    { "id": 10, "course_name": "Web Development", "instructor": "Wittie Antrim", "price": 75, "image": "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" },

    { "id": 11, "course_name": "JavaScript", "instructor": "Wallis Dreamer", "price": 83, "image": "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" },

    { "id": 12, "course_name": "React JS", "instructor": "Prissie Chapelhow", "price": 23, "image": "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" },

    { "id": 13, "course_name": "Artificial Intelligence", "instructor": "Powell Tatlowe", "price": 96, "image": "https://specials-images.forbesimg.com/imageserve/5ef030968548c80006be69fb/960x0.jpg?fit=scale" },

    { "id": 14, "course_name": "Machine Learning", "instructor": "Kerk McCree", "price": 71, "image": "https://miro.medium.com/max/2560/1*cG6U1qstYDijh9bPL42e-Q.jpeg" },

    { "id": 15, "course_name": "Data Mining", "instructor": "Cornie Gilburt", "price": 75, "image": "https://static.vecteezy.com/system/resources/thumbnails/000/223/706/original/data-mining-illustration.jpg" },

    { "id": 16, "course_name": "Web Scraping", "instructor": "Rupert McRorie", "price": 25, "image": "https://hackernoon.com/hn-images/1*kfOsUxggG5wDbDcxgC0Uwg.png" },

    { "id": 17, "course_name": "Discrete Mathematics", "instructor": "Nerty Ber", "price": 16, "image": "https://previews.123rf.com/images/radiantskies/radiantskies1211/radiantskies121100041/16084060-abstract-word-cloud-for-discrete-mathematics-with-related-tags-and-terms.jpg" },

    { "id": 18, "course_name": "Data Communication", "instructor": "Ches Quernel", "price": 42, "image": "https://www.iid.gr/wp-content/uploads/2017/11/data-communication.jpg" },

    { "id": 19, "course_name": "Algorithm", "instructor": "Regina Redmire", "price": 89, "image": "https://www.stephotec.com/wp-content/uploads/2018/12/algorithm-2.png" },

    { "id": 20, "course_name": "Backend Development", "instructor": "Rozalin Gregolin", "price": 55, "image": "https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" },

    { "id": 21, "course_name": "Database", "instructor": "Timmy Dennis", "price": 95, "image": "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png" },

    { "id": 22, "course_name": "Numerical Methods", "instructor": "Cedric Banks", "price": 91, "image": "https://img.pngio.com/numerical-methods-calculators-android-app-documentation-numerical-analysis-png-1920_1271.png" },

    { "id": 23, "course_name": "Image Processing", "instructor": "Eileen Hogan", "price": 84, "image": "https://assets.skyfilabs.com/images/blog/innovative-image-processing-based-final-year-projects-for-students.jpg" },

    { "id": 24, "course_name": "Graph Theory", "instructor": "Jessie Huff", "price": 68, "image": "https://miro.medium.com/max/908/1*9NaTWnSvRXPv4bewvIhMNQ.png" },

    { "id": 25, "course_name": "Robotics", "instructor": "Ross Sharp", "price": 56, "image": "https://images-platform.99static.com//223ddnhEiEIEQVNlGa_ICHAO-hQ=/298x2270:1601x3571/fit-in/590x590/99designs-contests-attachments/119/119154/attachment_119154632" },

    { "id": 26, "course_name": "Computer Interfacing", "instructor": "Clark Flores", "price": 98, "image": "https://p1.ifengimg.com/a/2017_13/8dba3d5f209ecb8_size99_w1024_h627.jpg" },

    { "id": 27, "course_name": "Pattern Recognition", "instructor": "Gerard Hall", "price": 77, "image": "https://claimgenius.com/wp-content/uploads/2020/03/Blog07-Exploring-Pattern-Recognition.jpg" },

    { "id": 28, "course_name": "Compiler", "instructor": "Jessie Cain", "price": 79, "image": "https://cdn.educba.com/academy/wp-content/uploads/2019/09/c-compilers-final.png" },

    { "id": 29, "course_name": "Cloud Computing", "instructor": "Ted Mccoy", "price": 82, "image": "https://i.ytimg.com/vi/dH0yz-Osy54/maxresdefault.jpg" },

    { "id": 30, "course_name": "VLSI Design", "instructor": "Jamie Gonzalez", "price": 81, "image": "https://phdizone.com/wp-content/uploads/2020/02/vlsi-design.jpg" },


];

export default courses;