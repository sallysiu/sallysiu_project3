// const total_points = () => {
// 	let total = 0

// 	for (let i = 1; i <= 10; i += 1) {
// 		// let answer_num = (document.getElementsByTagName("input")).length;
// 		// console.log(answer_num);
// 		for (let j = 1; document.getElementById(`q${i}_choice${j}`); j += 1) {
// 			// let exists = (document.getElementById("q" + i + "_choice" + j));
// 			// console.log(exists);
// 			if (document.getElementById("q" + i + "_choice" + j).checked) {
// 				console.log(((document.getElementById("q" + i + "_choice" + j)).name) + ": " + ((document.getElementById("q" + i + "_choice" + j)).value))
// 				total += parseInt((document.getElementById("q" + i + "_choice" + j)).value)
// 			}
// 		}
// 		console.log(`working total: ${total}`)
// 	}
// 	console.log(`final total: ${total}`)

// 	if (total > 10) {
// 		document.getElementById("result").textContent = `You are a monster! You got ${total} points.`;
// 	}
// 	else if (total < 3) {
// 		document.getElementById("result").textContent = `You're not even close to being a monster; you got ${total} points`;
// 	}
// 	else {
// 		document.getElementById("result").textContent = `You could be a monster; you should watch yourself since you got ${total} points`;
// 	}
// }



$(function () {
	console.log('ready')
	
	$("form").on("submit", function (event) {
		event.preventDefault();

		let total = 0

		for (let i = 1; i <= 10; i += 1) {
			// let answer_num = (document.getElementsByTagName("input")).length;
			// console.log(answer_num);
			for (let j = 1; document.getElementById(`q${i}_choice${j}`); j += 1) {
				// let exists = (document.getElementById("q" + i + "_choice" + j));
				// console.log(exists);
				if (document.getElementById(`q${i}_choice${j}`).checked) {
					// console.log(((document.getElementById(`q${i}_choice${j}`)).name) + ": " + ((document.getElementById(`q${i}_choice${j}`)).value))
					total += parseInt((document.getElementById(`q${i}_choice${j}`)).value)
				}
			}
			console.log(`working total: ${total}`)
		}
		console.log(`final total: ${total}`)

		// if (total > 10) {
		// 	document.getElementById("result").textContent = `You are a monster! You got ${total} points.`;
		// }
		// else if (total < 3) {
		// 	document.getElementById("result").textContent = `You're not even close to being a monster; you got ${total} points`;
		// }
		// else {
		// 	document.getElementById("result").textContent = `You could be a monster; you should watch yourself since you got ${total} points`;
		// }

		if (total > 10) {
			$("#result").html(`<p>You are a monster! You got ${total} points.</p>`);
		}
		else if (total < 3) {
			$("#result").html(`<p>You're not even close to being a monster; you got ${total} points</p>`);
		}
		else {
			$("#result").html(`<p>You could be a monster; you should watch yourself since you got ${total} points </p>`);
		}





	});

});








































// $(function() {
// 	console.log('ready')

// 	let total = 0;

// 	$("form").on("submit", function (event) {
// 		//stop the natural behaviour of the form
// 		event.preventDefault();


// 		for (let questionNum = 1; questionNum <= 10; questionNum++) {
// //			console.log(questionNum)
// 			// for (let choiceNum = 1; document.getElementById(`q${questionNum}_choice${choiceNum}`); choiceNum += 1) {
// //				console.log(questionNum)

// 			for (let choiceNum = 1; (document.getElementById("q" + questionNum + "_choice" + choiceNum)); choiceNum++) {
// 				// console.log(document.getElementById(`q${questionNum}_choice${choiceNum}`));
// //				console.log(document.getElementById("q" + questionNum + "_choice" + choiceNum))

// 				if (document.getElementById(`q${questionNum}_choice${choiceNum}`).checked) {
					
// 					console.log(((document.getElementById(`q${questionNum}_choice${choiceNum}`)).name) + ": " + ((document.getElementById(`q${questionNum}_choice${choiceNum}`)).value))

// 					total += parseInt((document.getElementById(`q${questionNum}_choice${choiceNum}`)).value)

// 				}
// 			}
// 		}

// 		console.log(`final total: ${total}`)

		
// 		/// BELOW DOESN'T WORK 
		
// 		if (total > 10) {
// 			$("#result").html(`<p>You are a monster! You got ${total} points.</p>`);
// 		}
// 		if (total < 3) {
// 			$("#result").html(`<p>You're not even close to being a monster; you got ${total} points</p>`);
// 		}
// 		else {
// 			$("#result").html(`<p>You could be a monster; you should watch yourself since you got ${total} points </p>`);
// 		}
		
// 	});



// });