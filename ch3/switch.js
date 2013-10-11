// if (i == 25) {
//     console.log("25");
// } else if (i == 35) {
//     console.log("35");
// } else if (i == 45) {
//     console.log("45");
// } else  {
//     console.log("Other");
// }

// switch (i) {
//     case 25:
//         console.log("25");
//         break;
//     case 35:
//         console.log("35");
//         break;
//     case 45:
//         console.log("45");
//         break;
//     default:
//         console.log("Other");
// }


switch ("hello world") {
    case "hello" + "world":
        console.log("Greeting was found.");
        break;
    case "goodbye":
        console.log("Closing was found");
        break;
    default:
        console.log("Unexpected message was found");
}