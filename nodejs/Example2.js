//Object Literal Example
const course = {
    id: 1,
    title: "Node js Basics",
    description: "Learn the fundamentals of Node.js",
    isActive: true,
    tags: ["javascript","backend","nodejs"],

    printCourse(){
    console.log(`${this.id}, ${this.title} - ${this.description}`)
}
}


console.log(course.title)
console.log(course["isActive"])

course.printCourse()

if(course.tags.includes("backend")){
    console.log("The course contains the 'backend' tag.")
}