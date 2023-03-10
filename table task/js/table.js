let courses=[
    {
        
        name:"Web Design",
        img:"1.png",
        content:"Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
        price:15000,
        duration:"45Hrs"
    },
    {
        
        name:"Angular",
        img:"2.png",
        content:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
        price:20000,
        duration:"60Hrs"   
    },
    {
       
        name:"React",
        img:"3.png",
        content:"It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.",
        price:18000,
        duration:"60Hrs"   
    },
    {
        
        name:"PHP",
        img:"4.webp",
        content:"PHP(short for Hypertext PreProcessor) is the most widely used open source and general purpose server side scripting language used mainly in web development to create dynamic websites and applications. It was developed in 1994 by Rasmus",
        price:15000,
        duration:"60Hrs"   
    },
    {
       
        name:"Java",
        img:"5.jpeg",
        content:"Java is a platform-independent, object-oriented programming language (OOP). It is not to be confused with JavaScript, a scripting language used to create dynamic web pages. Due to its reliability and ease of use, Java is one of the most popular programming languages in the world.",
        price:25000,
        duration:"70Hrs"   
    },
    {
      
        name:"Python",
        img:"6.png",
        content:"Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
        price:22000,
        duration:"60Hrs"   
    }
    

]
let c=""
for(let b=0;b<courses.length;b++){
    c+=`<tr>
    <td>${b+1}</td>
    <td>${courses[b].name}</td>
    <td><img src="images/${courses[b].img}" alt="" width="100px" height="100px"></td>
    <td>${courses[b].content}</td>
    <td>${courses[b].price}</td>
    <td>${courses[b].duration}</td>
    </tr>
    `
}
document.getElementById("td").innerHTML=c;
