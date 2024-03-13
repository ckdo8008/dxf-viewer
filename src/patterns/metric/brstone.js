import { Pattern, RegisterPattern } from "../../Pattern.js"

RegisterPattern(Pattern.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,8.382
90, 22.86,0, 8.382,12.7, 8.382,-8.382
90, 20.32,0, 8.382,12.7, 8.382,-8.382
0, 22.86,1.397, 12.7,8.382, -22.86,2.54
0, 22.86,2.794, 12.7,8.382, -22.86,2.54
0, 22.86,4.191, 12.7,8.382, -22.86,2.54
0, 22.86,5.588, 12.7,8.382, -22.86,2.54
0, 22.86,6.985, 12.7,8.382, -22.86,2.54
`))
