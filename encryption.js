let model1 = {
	1 : ["a","b","c","d","e","f","g","h"],
	2 : ["i", "j", "k", "l", "m", "n", "o", "p"],
	3 : ["q", "r", "s", "t", "u", "v", "w", "x"],
	4 : ["y", "z", "A", "B", "C", "D", "E", "F"],
	5 : ["G", "H", "I", "J", "K", "L", "M", "N"],
	6 : ["O", "P", "Q", "R", "S", "T", "U", "V"],
	7 : ["W", "X", "Y", "Z", "0", "1", "2", "3"],
	8 : ["4", "5", "6", "7", "8", "9", ".", "@"]
}

let input = "ManuLogan101"
let charArray = input.split("")
let final = ""
for(let index in charArray){
	let direction : number = Number(index)%4
	if(model1[1].includes(charArray[index])){
		let ind = model1[1].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[1], model1[8], model1[2])
	}
	if(model1[2].includes(charArray[index])){
		let ind = model1[2].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[2], model1[1], model1[3])
	}
	if(model1[3].includes(charArray[index])){
		let ind = model1[3].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[3], model1[2], model1[4])
	}
	if(model1[4].includes(charArray[index])){
		let ind = model1[4].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[4], model1[3], model1[5])
	}
	if(model1[5].includes(charArray[index])){
		let ind = model1[5].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[5], model1[4], model1[6])
	}
	if(model1[6].includes(charArray[index])){
		let ind = model1[6].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[6], model1[5], model1[7])
	}
	if(model1[7].includes(charArray[index])){
		let ind = model1[7].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[7], model1[6], model1[8])
	}
	if(model1[8].includes(charArray[index])){
		let ind = model1[8].indexOf(charArray[index])
		final += getLetter(ind, direction, model1[8], model1[7], model1[1])
	}
}

function getLetter(index : number, direction : number, current: string[], top : string[], bottom: string[]){
	if(index == 0 && direction == 3){
		return current[7]
	}
	if(index == 7 && direction == 1){
		return current[1]
	}
	if(direction == 0){
		return top[index]
	}
	if(direction == 1){
		return current[index+1]
	}
	if(direction == 3){
		return current[index-1]
	}
	if(direction == 2){
		return bottom[index]
	}
}

console.log(final)